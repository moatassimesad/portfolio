import { SectionContainer } from "@/components/section-container"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {Calendar, ExternalLink, Github, MapPin} from "lucide-react"
import {Button} from "@/components/ui/button";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "eGrow Automations",
      location: "eGrow",
      period: "June 2025 – Present",
      description: [
        "Developed with Nuxt 4 (frontend) and Laravel 12 (backend) using GraphQL API architecture",
        "Allows users to create custom flows using triggers, conditions, filters, actions, and loops",
        "Integrated with major platforms like Shopify, WooCommerce, Instagram, Facebook Ads, and more",
        "Designed a scalable engine to handle thousands of concurrent automation executions in real time",
      ],
      technologies: ["Nuxt 4", "Laravel 12", "GraphQL", "And More..."],
    },
    {
      title: "Full Stack Developer",
      company: "eGrow",
      location: "eGrow",
      period: "Oct 2023 – Present",
      description: [
        "Leading migration to Nuxt 3, Laravel, and Tailwind CSS v4 and GraphQL from legacy stack",
        "Integrated 30+ third-party services including WhatsApp, Shopify, Facebook Ads, and shipping carriers",
        "Built advanced automation workflows with trigger-action systems similar to Zapier",
        "Developed real-time sync via WebSockets and webhook integration",
      ],
      technologies: ["Nuxt 3", "Laravel", "Tailwind CSS v4", "GraphQL", "WebSockets"],
      links: {
        demo: "https://www.egrow.com",
      },
    },
    {
      title: "Full Stack Developer",
      company: "Beloud",
      location: "SafeApps",
      period: "Sep 2022 – Sep 2023",
      description: [
        "Built entire stack for a social news platform using Nuxt.js and Laravel",
        "Integrated AI-driven content suggestions and preference learning",
        "Developed live comments, messaging, and breaking news alerts using WebSockets",
        "Implemented web and mobile push notification systems",
      ],
      technologies: ["Nuxt.js", "Laravel", "WebSockets", "AI Integration", "Push Notifications"],
      links: {
        demo: "https://www.beloud.com",
      },
    },
    {
      title: "Full Stack Developer",
      company: "Staff Platform",
      location: "SafeApps",
      period: "Oct 2021 – Aug 2022",
      description: [
        "Built CMS for 'Breaking News' app (50M+ downloads) using Vue.js and Laravel",
        "Developed modules for user moderation, comment reviews, and content scheduling",
        "Implemented dashboards with advanced analytics and permission controls",
      ],
      technologies: ["Vue.js", "Laravel", "CMS", "Analytics", "User Management"],
    },
  ]

  return (
    <SectionContainer id="experience" className="bg-muted/30">
      <SectionHeader
        title="Work Experience"
        subtitle="My professional journey building scalable web applications and automation platforms"
      />

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card
            key={index}
            className="relative hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-in-left"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <CardHeader>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                    <span className="font-medium">{exp.company}</span>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4"/>
                        <span className="text-sm">{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4"/>
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
                {exp.links?.demo && (
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={exp.links.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Website
                        </a>
                      </Button>
                    </div>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4">
                {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"/>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                    <Badge
                        key={tech}
                        variant="outline"
                    className="transition-colors duration-200 animate-fade-in"
                    style={{ animationDelay: `${index * 0.2 + techIndex * 0.05}s` }}
                  >
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
