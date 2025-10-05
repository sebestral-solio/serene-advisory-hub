import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Business Owner",
    content: "The personalized guidance I received was exactly what I needed. My advisor truly understood my goals and helped me create a clear path forward. I couldn't be more grateful.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Entrepreneur",
    content: "Professional, caring, and incredibly knowledgeable. The scheduling was seamless, and the ongoing support has been invaluable. Highly recommend to anyone seeking expert advice.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Creative Professional",
    content: "From the first consultation, I felt heard and supported. The progress tracking tools keep me accountable, and my advisor celebrates every milestone with me. A truly transformative experience.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-muted/20 to-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-semibold mb-4">
            ⭐ 500+ Happy Clients
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-foreground">
            Loved by
            <br />
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Professionals Worldwide
            </span>
          </h2>
          <p className="text-xl text-muted-foreground font-medium">
            Real results from real people
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-0 bg-card/50 backdrop-blur-sm hover-lift shadow-card hover:shadow-soft transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-8 space-y-6 relative">
                <Quote className="h-12 w-12 text-primary/20 group-hover:text-primary/40 transition-colors" />
                
                <p className="text-muted-foreground leading-relaxed font-medium">
                  "{testimonial.content}"
                </p>

                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-xl">★</span>
                  ))}
                </div>

                <div className="border-t border-border pt-4 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
