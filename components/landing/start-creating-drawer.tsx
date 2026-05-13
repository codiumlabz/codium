"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Sparkles } from "lucide-react";

export function StartCreatingDrawer({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    projectName: "",
    description: "",
    duration: "",
    budget: "",
    contactNumber: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setFormData({ projectName: "", description: "", duration: "", budget: "", contactNumber: "" });
    setOpen(false);
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className="mx-auto max-w-lg border-foreground/10">
        <DrawerHeader className="text-left px-8 pt-8 pb-0">
          <DrawerTitle className="text-2xl font-display tracking-tight">
            Start your project
          </DrawerTitle>
          <DrawerDescription className="text-muted-foreground">
            Tell us about your idea and we&apos;ll make it happen.
          </DrawerDescription>
        </DrawerHeader>

        <form onSubmit={handleSubmit} className="px-8 py-6 space-y-5">
          <div className="space-y-2">
            <Label htmlFor="projectName" className="text-sm font-medium">
              Project name <span className="text-muted-foreground">*</span>
            </Label>
            <Input
              id="projectName"
              required
              placeholder="e.g. Codium App"
              value={formData.projectName}
              onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
              className="rounded-none border-foreground/20 focus-visible:border-foreground h-11 px-4"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-medium">
              Description <span className="text-muted-foreground">*</span>
            </Label>
            <Textarea
              id="description"
              required
              rows={4}
              placeholder="Describe your project idea..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="rounded-none border-foreground/20 focus-visible:border-foreground resize-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="duration" className="text-sm font-medium">
                Duration <span className="text-muted-foreground">*</span>
              </Label>
              <Input
                id="duration"
                required
                placeholder="e.g. 3 months"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                className="rounded-none border-foreground/20 focus-visible:border-foreground h-11 px-4"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="budget" className="text-sm font-medium">
                Budget <span className="text-muted-foreground">*</span>
              </Label>
              <Input
                id="budget"
                required
                placeholder="e.g. $10k"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="rounded-none border-foreground/20 focus-visible:border-foreground h-11 px-4"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="contactNumber" className="text-sm font-medium">
              Contact number <span className="text-muted-foreground">*</span>
            </Label>
            <Input
              id="contactNumber"
              required
              placeholder="e.g. +1 555 123 4567"
              value={formData.contactNumber}
              onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
              className="rounded-none border-foreground/20 focus-visible:border-foreground h-11 px-4"
            />
          </div>

          <DrawerFooter className="px-0 pt-2">
            <Button
              type="submit"
              disabled={isSubmitting}
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background px-8 h-12 text-base rounded-full group w-full"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                  Sending...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Send your magic word
                  <Sparkles className="w-4 h-4 transition-transform group-hover:rotate-12" />
                </span>
              )}
            </Button>
          </DrawerFooter>
        </form>
      </DrawerContent>
    </Drawer>
  );
}
