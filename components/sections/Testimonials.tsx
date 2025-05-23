import { testimonials } from '../../src/data/mockData';
import ImageWithFallback from '../ImageWithFallback';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm/30 to-background z-0"></div>
      
      <div className="absolute left-0 right-0 top-0 h-32 bg-wave-pattern bg-repeat-x bg-contain opacity-20"></div>
      <div className="absolute left-0 right-0 bottom-0 h-32 bg-wave-pattern bg-repeat-x bg-contain opacity-20 transform rotate-180"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Experiences</h2>
          <p className="max-w-xl mx-auto text-foreground/80">
            Discover how Tranquil Haven has transformed the lives of our clients through holistic wellness practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg relative flex flex-col"
            >
              {/* Quote mark decoration */}
              <div className="absolute text-8xl font-serif text-primary/10 -top-2 -left-2 leading-none">
                "
              </div>
              
              <div className="relative z-10 flex-1">
                <p className="text-foreground/80 italic mb-8 text-lg">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center mt-auto">
                  <div className="w-16 h-16 rounded-full overflow-hidden relative mr-4">
                    <ImageWithFallback 
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                    />
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-foreground text-lg">{testimonial.name}</h4>
                    <p className="text-primary">{testimonial.role}</p>
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