import { SectionContainer } from "@/components/section-container"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Snesia – Website Builder",
      period: "Apr 2024 – Present",
      description:
        "Created a no-code platform with drag-and-drop editing, reusable components, and collaborative editing. Built using Nuxt 3, Tailwind CSS v4, and Laravel. Designed for high scalability and non-technical user accessibility.",
      technologies: ["Nuxt 3", "Tailwind CSS v4", "Laravel", "Drag & Drop", "Real-time Collaboration"],
      links: {
        demo: "https://www.snesia.com",
      },
    },
  ]

  return (
    <SectionContainer id="projects">
      <SectionHeader
        title="Personal Projects"
        subtitle="Side projects that showcase my passion for building innovative solutions"
      />

      <div className="grid gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{project.period}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Website
                    </a>
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  )
}
