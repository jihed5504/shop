import { services } from '../../src/data/mockData';
import ImageWithFallback from '../ImageWithFallback';

export default function Booking() {
  return (
    <section id="booking" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted to-background z-0"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Image */}
          <div className="hidden md:block relative">
            <div className="relative h-[600px] rounded-2xl overflow-hidden">
              <ImageWithFallback 
                src="/images/booking-image.jpg"
                alt="Tranquil spa setting"
                fill
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full z-0"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-warm/20 rounded-full z-0"></div>
          </div>
          
          {/* Right column - Form */}
          <div>
            <div className="text-center md:text-left mb-8">
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Booking</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Session</h2>
              <p className="text-foreground/80 max-w-md mx-auto md:mx-0">
                Take the first step toward tranquility and wellness by scheduling your session with our expert practitioners.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-foreground">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-secondary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-foreground">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-secondary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Your email"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="date" className="block text-sm font-medium text-foreground">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="w-full px-4 py-3 border border-secondary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="service" className="block text-sm font-medium text-foreground">
                    Select Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-secondary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    required
                  >
                    <option value="">Choose a service...</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.name} ({service.duration})
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-foreground">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="w-full px-4 py-3 border border-secondary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Any special requirements or requests..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition duration-300 flex items-center justify-center gap-2 group"
                >
                  <span>Book Now</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 