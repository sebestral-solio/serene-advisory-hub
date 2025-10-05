import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MessageCircle, TrendingUp, Shield } from "lucide-react";

const services = [
  {
    icon: MessageCircle,
    title: "Personalized Consultation",
    description: "One-on-one sessions tailored to your unique needs and goals, providing expert guidance every step of the way.",
  },
  {
    icon: Calendar,
    title: "Easy Scheduling",
    description: "Book appointments at your convenience with our streamlined scheduling system. No hassle, no waiting.",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Monitor your journey with detailed progress reports and actionable insights to keep you on track.",
  },
  {
    icon: Shield,
    title: "Secure Client Portal",
    description: "Access your information anytime through our encrypted, user-friendly client portal with complete privacy.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            How We <span className="text-primary">Support You</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive services designed to provide you with the guidance and tools you need to succeed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-border bg-card hover-lift shadow-card hover:shadow-soft transition-all duration-300"
            >
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
