import { SectionContainer } from "@/components/section-container"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Globe } from "lucide-react"

export function AboutSection() {
  const languages = [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Advanced" },
    { name: "French", level: "Good comprehension" },
  ]

  return (
    <SectionContainer id="about" className="bg-muted/30">
      <SectionHeader
        title="About Me"
        subtitle="Passionate full-stack developer with expertise in modern web technologies"
      />

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            I'm a dedicated Full Stack Developer based in Marrakech, Morocco, with extensive experience in building
            scalable web applications and automation platforms. My expertise spans across modern frontend frameworks
            like Vue.js and Nuxt.js, robust backend solutions with Laravel and Node.js, and seamless API integrations.
          </p>

          <p className="text-lg leading-relaxed">
            Currently working at eGrow, I specialize in creating sophisticated automation workflows, integrating with
            major platforms like Shopify, WooCommerce, and social media APIs. I'm passionate about clean code, scalable
            architecture, and delivering exceptional user experiences.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <Badge key={lang.name} variant="secondary">
                  {lang.name} - {lang.level}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <Card>
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Marrakech, Morocco</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-primary" />
              <span>+212 6 64 50 10 81</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-primary" />
              <span>saadounmtsm@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Globe className="h-5 w-5 text-primary" />
              <span>Open to remote, hybrid, or on-site roles</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionContainer>
  )
}
