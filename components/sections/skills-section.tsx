import { SectionContainer } from "@/components/section-container"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Server, Database, Wrench } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      skills: ["HTML", "CSS", "JavaScript", "Vue.js", "Nuxt.js", "Tailwind CSS", "Bootstrap"],
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["PHP", "Node.js", "Laravel", "GraphQL", "REST APIs"],
    },
    {
      title: "Database",
      icon: Database,
      skills: ["MySQL", "Database Design", "Query Optimization"],
    },
    {
      title: "Tools & Others",
      icon: Wrench,
      skills: ["Git", "Postman", "Zapier", "Twilio API", "Google APIs", "CI/CD", "WebSockets"],
    },
  ]

  return (
    <SectionContainer id="skills">
      <SectionHeader
        title="Technical Skills"
        subtitle="Technologies and tools I work with to build amazing applications"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <Card
            key={category.title}
            className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader className="text-center pb-4">
              <category.icon className="h-8 w-8 mx-auto text-primary mb-2 transition-transform duration-300 hover:scale-110" />
              <CardTitle className="text-lg">{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  >
                    {skill}
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
