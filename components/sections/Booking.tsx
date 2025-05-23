import { services } from '../../src/data/mockData';

export default function Booking() {
  return (
    <section id="booking" className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Session</h2>
          <p className="max-w-xl mx-auto text-foreground/80">
            Take the first step toward tranquility and wellness by scheduling your session with our expert practitioners.
          </p>
        </div>
        
        <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-foreground">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 border border-secondary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
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
                className="w-full px-4 py-3 border border-secondary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
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
                className="w-full px-4 py-3 border border-secondary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
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
                className="w-full px-4 py-3 border border-secondary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
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
                className="w-full px-4 py-3 border border-secondary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Any special requirements or requests..."
              />
            </div>
            
            <button
              type="submit"
              className="w-full btn-primary text-center"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
} 