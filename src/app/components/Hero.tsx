import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="container flex lg:min-h-[calc(100vh-3.5rem)] min-h-max max-w-screen-2xl flex-col items-center justify-center space-y-8 lg:py-24 py-32 text-center">
      <div className="space-y-4">
        <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          Build Smarter with
          <br />
          XenoWeb
        </h1>
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Empowering businesses with cutting-edge web solutions. From AI-powered applications to seamless cloud integrations, we craft innovative digital experiences that drive success.
        </p>
      </div>
      <div className="flex lg:flex-row flex-col gap-4">
        <Button size="lg">
          Explore Services
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline" size="lg">
          Get a Free Consultation
        </Button>
      </div>
    </section>
  )
}