import Image from 'next/image';
import { testimonials } from '../../src/data/mockData';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-warm/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Experiences</h2>
          <p className="max-w-xl mx-auto text-foreground/80">
            Discover how Tranquil Haven has transformed the lives of our clients through holistic wellness practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-lg p-6 shadow-md relative"
            >
              {/* Quote mark decoration */}
              <div className="absolute text-6xl font-serif text-primary/10 top-4 left-4">
                "
              </div>
              
              <div className="relative">
                <p className="text-foreground/80 italic mb-6">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center">
                  {/* Avatar placeholder */}
                  <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center mr-4">
                    <span className="text-xs text-primary">{testimonial.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-foreground/60">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 