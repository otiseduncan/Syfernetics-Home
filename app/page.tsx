import Hero from "@/components/Hero";
import Features from "@/components/Features";
import BuildSection from "@/components/BuildSection";
import TechStack from "@/components/TechStack";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import { AnimatedBackground, Reveal } from "@/components/PageMotion";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030712] text-slate-100">
      <AnimatedBackground />

      <div className="relative z-10">
        <Reveal>
          <Hero />
        </Reveal>

        <Reveal delay={0.05}>
          <Features />
        </Reveal>

        <Reveal delay={0.05}>
          <BuildSection />
        </Reveal>

        <Reveal delay={0.05}>
          <TechStack />
        </Reveal>

        <Reveal delay={0.05}>
          <AboutSection />
        </Reveal>

        <Reveal delay={0.05}>
          <Testimonials />
        </Reveal>
      </div>
    </main>
  );
}