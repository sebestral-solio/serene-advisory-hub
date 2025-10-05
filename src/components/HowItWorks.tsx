import { CheckCircle2, MessageSquare, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: CheckCircle2,
    number: "01",
    title: "Book Your Consultation",
    description: "Choose a time that works for you and tell us about your needs. We'll match you with the right advisor.",
  },
  {
    icon: MessageSquare,
    number: "02",
    title: "Receive Personalized Advice",
    description: "Meet with your dedicated advisor for a comprehensive consultation tailored to your unique situation.",
  },
  {
    icon: BarChart3,
    number: "03",
    title: "Track Your Progress",
    description: "Follow your journey with regular check-ins, progress reports, and ongoing support as you achieve your goals.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Simple, <span className="text-secondary">Effective Process</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Getting started is easy. We've streamlined every step to ensure a smooth, stress-free experience.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="flex flex-col md:flex-row gap-8 items-start group"
              >
                <div className="flex-shrink-0 relative">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 shadow-card">
                    <step.icon className="h-9 w-9 text-primary" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-24 left-10 w-0.5 h-20 bg-border" />
                  )}
                </div>

                <div className="flex-1 space-y-3">
                  <div className="text-sm font-semibold text-primary tracking-wider">
                    STEP {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
