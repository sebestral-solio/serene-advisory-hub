import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const CallToAction = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8 bg-card shadow-soft rounded-3xl p-12 md:p-16 border border-border">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Ready to Start Your <span className="text-primary">Journey?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Take the first step today. Book a confidential consultation and discover how personalized guidance can help you achieve your goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="text-lg px-8 py-6 shadow-soft">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Your Consultation
            </Button>
          </div>

          <div className="pt-6 space-y-2">
            <p className="text-sm text-muted-foreground">
              ✓ Free initial consultation • ✓ No commitment required • ✓ 100% confidential
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
