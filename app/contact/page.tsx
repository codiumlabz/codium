"use client";

import { useEffect, useRef, useState } from "react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, ArrowUpRight, Send, Check } from "lucide-react";

import { createPortal } from "react-dom";

function ToastPortal({ message, visible }: { message: string; visible: boolean }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted || !visible) return null;

  return createPortal(
    <div className="fixed bottom-8 right-8 z-[100] animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="bg-foreground text-background px-6 py-4 rounded-full shadow-lg flex items-center gap-3 text-sm font-medium">
        <Check className="w-4 h-4" />
        {message}
      </div>
    </div>,
    document.body
  );
}

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "hello@codium.com", href: "mailto:hello@codium.com" },
    { icon: Phone, label: "Phone (Singapore)", value: "+65 8430 9344", href: "tel:+6584309344" },
    { icon: Phone, label: "Phone (Sri Lanka)", value: "+94 71 1796 476", href: "tel:+94711796476" },
    { icon: MapPin, label: "Office (Singapore)", value: "Blk 296,Punggol Centeral #02-497 singapore 820296", href: "#" },
    { icon: MapPin, label: "Office (Sri Lanka)", value: "Halmillakulama wawa road, Haritha Pedesa Nochchiyagama", href: "#" },
  ];

  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />
      <ToastPortal message="Message sent! We&apos;ll get back to you soon." visible={showToast} />

      <section ref={sectionRef} className="relative pt-32 lg:pt-40 pb-24 lg:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className={`mb-16 lg:mb-24 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="mb-6">
              <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground">
                <span className="w-8 h-px bg-foreground/30" />
                Get in touch
              </span>
            </div>
            <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-display leading-[0.9] tracking-tight mb-8">
              Let&apos;s talk about
              <br />
              your project
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Have a project in mind? We&apos;d love to hear from you. Send us a message
              and we&apos;ll respond within 24 hours.
            </p>
          </div>

          {/* Content grid */}
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-24">
            {/* Form */}
            <div className={`lg:col-span-3 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="relative border border-foreground/10 p-8 lg:p-12">
                <div className="absolute top-0 right-0 w-24 h-24 border-b border-l border-foreground/10" />

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name <span className="text-muted-foreground">*</span>
                      </label>
                      <Input
                        id="name"
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="rounded-none border-foreground/20 focus-visible:border-foreground h-12 px-4"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email <span className="text-muted-foreground">*</span>
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="rounded-none border-foreground/20 focus-visible:border-foreground h-12 px-4"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject <span className="text-muted-foreground">*</span>
                    </label>
                    <Input
                      id="subject"
                      required
                      placeholder="What is this about?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="rounded-none border-foreground/20 focus-visible:border-foreground h-12 px-4"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message <span className="text-muted-foreground">*</span>
                    </label>
                    <Textarea
                      id="message"
                      required
                      rows={6}
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="rounded-none border-foreground/20 focus-visible:border-foreground resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group w-full sm:w-auto"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send message
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact info sidebar */}
            <div className={`lg:col-span-2 space-y-8 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="lg:pt-8 space-y-2">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex items-start gap-4 p-4 -mx-4 hover:bg-foreground/5 rounded-lg transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center shrink-0 group-hover:border-foreground/30 transition-colors">
                      <item.icon className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-mono mb-1">{item.label}</p>
                      <p className="text-base font-medium group-hover:text-foreground transition-colors">{item.value}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground ml-auto mt-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>

              <div className="border-t border-foreground/10 pt-8">
                <h3 className="text-sm font-medium mb-4">Follow us</h3>
                <div className="flex gap-6">
                  {["Twitter", "GitHub", "LinkedIn"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                    >
                      {social}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
