import { MessageSquareQuote } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  program: string;
  year: string;
  avatar: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className="py-16 bg-neutral">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <MessageSquareQuote className="text-secondary" size={28} />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">Student Testimonials</h2>
          </div>
          <div className="w-24 h-1 bg-secondary mx-auto mt-4 mb-6"></div>
          <p className="text-[#1a2542] max-w-2xl mx-auto font-medium leading-relaxed">
            Hear what our students and alumni have to say about their transformative learning experiences at JSS Polytechnic.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6 relative">
              <div className="text-secondary text-5xl absolute -top-4 left-4">"</div>
              <p className="text-[#1a2542] mb-4 pt-4 font-medium leading-relaxed">{testimonial.quote}</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4 object-cover" 
                />
                <div>
                  <h4 className="font-heading font-bold text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-neutral-gray">{testimonial.program}, {testimonial.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
