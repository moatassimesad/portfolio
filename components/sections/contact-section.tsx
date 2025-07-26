import { SectionContainer } from "@/components/section-container"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "saadounmtsm@gmail.com",
      href: "mailto:saadounmtsm@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+212 6 64 50 10 81",
      href: "tel:+212664501081",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Marrakech, Morocco",
    },
  ]

  return (
    <SectionContainer id="contact">
      <SectionHeader title="Get In Touch" subtitle="Ready to work together? Let's discuss your next project" />

      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6 animate-slide-in-left">
            <div>
              <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always interested in new opportunities and exciting projects. Whether you're looking for a
                full-stack developer or want to discuss a potential collaboration, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <info.icon className="h-5 w-5 text-primary transition-transform duration-200 group-hover:scale-110" />
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="font-medium hover:text-primary transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Card className="animate-slide-in-right hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <MessageCircle className="h-12 w-12 text-primary mx-auto transition-transform duration-300 hover:scale-110" />
                <h3 className="text-xl font-semibold">Ready to Start?</h3>
                <p className="text-muted-foreground">
                  Let's discuss how I can help bring your ideas to life with modern web technologies.
                </p>
                <Button size="lg" className="w-full hover:scale-105 transition-transform duration-200" asChild>
                  <a href="mailto:saadounmtsm@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Message
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionContainer>
  )
}
