import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>Marrakech, Morocco</span>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="mailto:saadounmtsm@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </Link>
            <Link target="_blank" href="https://github.com/moatassimesad" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
            </Link>
            <Link target="_blank" href="https://www.linkedin.com/in/saad-moatassime-688853188" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>

          <p className="text-sm text-muted-foreground">© 2024 Moatassime Saad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
