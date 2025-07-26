# Moatassime Saad - Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- 🌙 Dark/Light mode toggle with system preference detection
- 📱 Fully responsive design
- ⚡ Built with Next.js 14 and TypeScript
- 🎨 Styled with Tailwind CSS and shadcn/ui
- 🚀 Optimized for performance
- ♿ Accessible design
- 📧 Contact integration

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <your-repo-url>
cd moatassime-portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Theme:** next-themes

## Project Structure

\`\`\`
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── sections/          # Page sections
│   ├── ui/               # shadcn/ui components
│   ├── navigation.tsx    # Navigation component
│   ├── footer.tsx        # Footer component
│   └── theme-provider.tsx # Theme provider
├── lib/                  # Utility functions
└── public/              # Static assets
\`\`\`

## Customization

### Personal Information
Update your personal information in the following files:
- `components/sections/hero-section.tsx`
- `components/sections/about-section.tsx`
- `components/sections/contact-section.tsx`

### Experience & Projects
Add your work experience and projects in:
- `components/sections/experience-section.tsx`
- `components/sections/projects-section.tsx`

### Styling
Customize colors and themes in:
- `app/globals.css`
- `tailwind.config.js`

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
Build the project and deploy the `out` folder:
\`\`\`bash
npm run build
\`\`\`

## License

This project is open source and available under the [MIT License](LICENSE).
# portfolio
