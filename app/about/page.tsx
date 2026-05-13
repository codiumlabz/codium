"use client";

import { useEffect, useRef, useState } from "react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Lightbulb, Shield, Rocket } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "We ship software that matters. Every line of code is intentional, every feature is purposeful, every release is meaningful.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay ahead of the curve. Our team explores emerging technologies and crafts solutions that push boundaries.",
  },
  {
    icon: Shield,
    title: "Trust",
    description: "Security and reliability are non-negotiable. We build systems that our clients can depend on, day in and day out.",
  },
  {
    icon: Rocket,
    title: "Velocity",
    description: "Speed without sacrifice. We move fast while maintaining the highest standards of quality and craftsmanship.",
  },
];

const team = [
  { name: "Alex Chen", role: "CEO & Co-Founder" },
  { name: "Sarah Mitchell", role: "CTO & Co-Founder" },
  { name: "Marcus Johnson", role: "Head of Design" },
  { name: "Priya Patel", role: "Head of Engineering" },
];

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />

      <section ref={sectionRef} className="relative pt-32 lg:pt-40 pb-24 lg:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className={`mb-16 lg:mb-24 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="mb-6">
              <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground">
                <span className="w-8 h-px bg-foreground/30" />
                About us
              </span>
            </div>
            <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-display leading-[0.9] tracking-tight mb-8">
              We build the
              <br />
              future of software
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Codium is a creative technology company that partners with ambitious teams to design,
              build, and scale exceptional digital products. Founded in 2018, we&apos;ve delivered
              180+ projects for startups and enterprises worldwide.
            </p>
          </div>

          {/* Mission */}
          <div className={`grid lg:grid-cols-2 gap-12 lg:gap-24 mb-24 lg:mb-32 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="relative border border-foreground/10 p-8 lg:p-12">
              <div className="absolute top-0 right-0 w-24 h-24 border-b border-l border-foreground/10" />
              <h2 className="text-3xl lg:text-5xl font-display tracking-tight mb-6 leading-[0.95]">
                Our mission
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To empower innovators with the technology they need to bring their ideas to life.
                We believe great software has the power to transform industries, and we&apos;re here
                to make that happen — one project at a time.
              </p>
            </div>
            <div className="relative border border-foreground/10 p-8 lg:p-12">
              <div className="absolute top-0 right-0 w-24 h-24 border-b border-l border-foreground/10" />
              <h2 className="text-3xl lg:text-5xl font-display tracking-tight mb-6 leading-[0.95]">
                Our approach
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We combine strategic thinking with technical excellence. Every project starts with
                understanding your vision, then we apply our expertise in design, engineering, and
                product strategy to turn that vision into reality.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className={`mb-24 lg:mb-32 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Our values
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-12 leading-[0.95]">
              What drives us.
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/10">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className={`bg-background p-8 lg:p-10 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center mb-6">
                    <value.icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-display mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div className={`mb-24 lg:mb-32 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/10">
              {[
                { value: "180+", label: "Projects delivered" },
                { value: "6+", label: "Years in business" },
                { value: "50+", label: "Team members" },
                { value: "12+", label: "Countries served" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className={`bg-background p-8 lg:p-10 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-5xl lg:text-7xl font-display tracking-tight">{stat.value}</div>
                  <div className="mt-3 text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className={`transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Leadership
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-12 leading-[0.95]">
              Meet the team.
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <div
                  key={member.name}
                  className={`border border-foreground/10 p-8 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center mb-5">
                    <span className="text-lg font-display text-muted-foreground">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground font-mono">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative pb-24 lg:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className={`relative border border-foreground transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <div className="relative z-10 px-8 lg:px-16 py-16 lg:py-24">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="flex-1">
                  <h2 className="text-4xl lg:text-7xl font-display tracking-tight mb-8 leading-[0.95]">
                    Want to work
                    <br />
                    with us?
                  </h2>
                  <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl">
                    We&apos;re always looking for ambitious partners and talented people.
                    Let&apos;s build something great together.
                  </p>
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <Button
                      size="lg"
                      className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group"
                    >
                      Get in touch
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="h-14 px-8 text-base rounded-full border-foreground/20 hover:bg-foreground/5"
                    >
                      View careers
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-foreground/10" />
            <div className="absolute bottom-0 left-0 w-32 h-32 border-t border-r border-foreground/10" />
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
