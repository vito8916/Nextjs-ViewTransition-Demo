
import { IntroCard } from "@/components/home/intro-card";
import { HeroImage } from "@/components/home/hero-image";
import { AboutCard } from "@/components/home/about-card";
import { Cta } from "@/components/home/cta";
import { ResumeCard } from "@/components/home/resume-card";
import { SkillsCard } from "@/components/home/skills-card";
import { StatusCard } from "@/components/home/status-card";

export default function Home() {
  return (
    <div className="page-shell min-h-screen">
      <main className="mx-auto w-full max-w-5xl px-4 pb-16 pt-6 sm:px-6">
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <HeroImage className="min-h-80 md:min-h-84 lg:col-span-2 lg:min-h-80" />
          <IntroCard className="lg:col-span-2" />
          <AboutCard className="md:col-span-2 lg:col-span-4" />
          <ResumeCard className="md:col-span-2 lg:col-span-2 lg:row-span-2" />
          <SkillsCard className="lg:col-span-2" />
          <StatusCard className="lg:col-span-2" />
          <Cta className="md:col-span-2 lg:col-span-4" />
        </section>
      </main>
    </div>
  );
}
