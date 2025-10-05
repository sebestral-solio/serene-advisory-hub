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
  const gradients = ['gradient-vibrant', 'gradient-teal', 'gradient-accent', 'gradient-vibrant'];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-4">
            ✨ Premium Features
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-foreground">
            Everything You Need,
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Nothing You Don't
            </span>
          </h2>
          <p className="text-xl text-muted-foreground font-medium">
            Powerful tools designed for modern professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-0 bg-card/50 backdrop-blur-sm hover-lift shadow-card hover:shadow-soft transition-all duration-500 group overflow-hidden relative"
            >
              <div className={`absolute inset-0 ${gradients[index]} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              <CardContent className="p-8 space-y-4 relative">
                <div className={`w-16 h-16 rounded-2xl ${gradients[index]} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
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
