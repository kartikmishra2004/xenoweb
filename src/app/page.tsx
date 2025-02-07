import Hero from "@/app/components/Hero";
import Features from "@/app/components/Features";
import CTA from "@/app/components/CTA";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
      </div>
      <div className="relative z-10">
        <Hero />
        <Features />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
