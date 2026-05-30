#!/usr/bin/env bash
# Idempotent server bootstrap for the static portfolio site.
# Safe to run on every deploy. Installs nginx if missing and writes the
# site config. Cloudflare terminates HTTPS at the edge, so the origin only
# serves plain HTTP on port 80.
set -euo pipefail

DOMAIN="saad.moatassime.com"
ROOT="/var/www/saad"

export DEBIAN_FRONTEND=noninteractive

# Install nginx only if it is not already present.
if ! command -v nginx >/dev/null 2>&1; then
  apt-get update -y
  apt-get install -y nginx
fi

mkdir -p "$ROOT"

# Write the nginx site config (overwrite each deploy so changes here take effect).
cat > /etc/nginx/sites-available/saad <<EOF
server {
    listen 80;
    listen [::]:80;
    server_name $DOMAIN;

    root $ROOT;
    index index.html;

    # Serve the homepage and any real files (resume.pdf, /assets/...);
    # anything else redirects to the site root.
    location = / {
        try_files /index.html =404;
    }

    location / {
        try_files \$uri \$uri/ @redirect_home;
    }

    location @redirect_home {
        return 302 /;
    }
}
EOF

ln -sf /etc/nginx/sites-available/saad /etc/nginx/sites-enabled/saad
rm -f /etc/nginx/sites-enabled/default

# Validate and reload.
nginx -t
systemctl enable nginx >/dev/null 2>&1 || true
systemctl reload nginx || systemctl restart nginx

echo "Bootstrap complete: nginx serving $ROOT for $DOMAIN on port 80."
