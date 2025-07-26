import { SectionContainer } from "@/components/section-container"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

export function EducationSection() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "FSTG – Cadi Ayyad University",
      year: "2021",
      specialization: "Distributed Computing Systems",
    },
    {
      degree: "Baccalaureate in Physical Sciences",
      institution: "Ibn Maja High School – Amizmiz",
      year: "2017",
    },
  ]

  return (
    <SectionContainer id="education" className="bg-muted/30">
      <SectionHeader
        title="Education"
        subtitle="Academic background that laid the foundation for my technical expertise"
      />

      <div className="grid md:grid-cols-2 gap-6">
        {education.map((edu, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-start gap-3">
                <GraduationCap className="h-6 w-6 text-primary mt-1" />
                <div className="flex-1">
                  <CardTitle className="text-lg mb-2">{edu.degree}</CardTitle>
                  <p className="text-muted-foreground font-medium">{edu.institution}</p>
                  {edu.specialization && (
                    <p className="text-sm text-muted-foreground mt-1">Specialization: {edu.specialization}</p>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">{edu.year}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  )
}
