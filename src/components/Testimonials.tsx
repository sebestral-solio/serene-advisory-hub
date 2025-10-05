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
    <section id="testimonials" className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real stories from people who've transformed their journey with our guidance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-border bg-card hover-lift shadow-card hover:shadow-soft transition-all duration-300"
            >
              <CardContent className="p-8 space-y-6">
                <Quote className="h-10 w-10 text-primary/30" />
                
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-lg">★</span>
                  ))}
                </div>

                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
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
