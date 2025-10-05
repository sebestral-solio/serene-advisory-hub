import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const CallToAction = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 bg-gradient-to-br from-card via-card to-primary/5 shadow-soft rounded-3xl p-12 md:p-20 border-0 backdrop-blur-sm animate-pulse-glow">
          <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold mb-2">
            🎉 Limited Time Offer
          </div>
          
          <h2 className="text-5xl md:text-7xl font-extrabold text-foreground leading-tight">
            Ready to Level Up?
          </h2>
          
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
            Join <span className="text-primary font-bold">500+</span> professionals who've already transformed their journey. 
            <span className="block mt-2 text-lg">First consultation is completely free. No credit card required.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button size="lg" className="text-xl px-12 py-8 gradient-vibrant shadow-glow hover:scale-105 transition-transform duration-300 font-bold">
              <Calendar className="mr-3 h-6 w-6" />
              Book Free Consultation
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm font-medium">
            <div className="flex items-center gap-2 text-foreground">
              <span className="text-green-500 text-xl">✓</span>
              <span>No commitment</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <span className="text-green-500 text-xl">✓</span>
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <span className="text-green-500 text-xl">✓</span>
              <span>Bank-level security</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
