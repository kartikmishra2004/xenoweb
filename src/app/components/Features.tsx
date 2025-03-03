import { CodeXml, Cloud, Shield, Zap } from "lucide-react"

const features = [
  {
    name: "Full-Stack Solutions",
    description: "Leverage the power of Next.js, Supabase, Django, Node.js for robust web applications.",
    icon: CodeXml,
  },
  {
    name: "Cloud Integration & Hosting",
    description: "Deploy and scale your applications efficiently with AWS and other cloud platforms.",
    icon: Cloud,
  },
  {
    name: "Secure Authentication",
    description: "State-of-the-art security measures to protect your most valuable assets.",
    icon: Shield,
  },
  {
    name: "High-Performance Systems",
    description: "Optimized for speed and efficiency, our solutions deliver unparalleled performance.",
    icon: Zap,
  },
]

export default function Features() {
  return (
    <section className="container space-y-16 lg:py-24">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Cutting-Edge Solutions</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Discover how XenoWeb can transform your business with our innovative technologies.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature) => (
          <div key={feature.name} className="relative overflow-hidden rounded-lg border bg-background p-8">
            <div className="flex items-center gap-4">
              <feature.icon className="h-8 w-8" />
              <h3 className="font-bold">{feature.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}