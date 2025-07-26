import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, Download, Mail } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Available for new opportunities
          </Badge>

          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Moatassime Saad
            </span>
          </h1>

          <p
            className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            Full Stack Developer specializing in modern web technologies. I build scalable applications with Vue.js,
            Nuxt.js, Laravel, and cutting-edge tools.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" asChild className="hover:scale-105 transition-transform duration-200">
              <Link href="mailto:saadounmtsm@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="hover:scale-105 transition-transform duration-200 bg-transparent">
              <Link target="_blank" href="https://docs.google.com/document/d/12yIEAjHde3FqP0q8Mdm-lvC61ANEocn16gYz3u6PlUc/export?format=pdf">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Link>
            </Button>
          </div>

          <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <Link href="#about" className="animate-bounce">
              <ArrowDown className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
