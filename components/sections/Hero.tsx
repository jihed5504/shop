import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="min-h-screen bg-gradient-to-b from-accent/30 to-secondary/30 flex items-center relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat opacity-30"></div>
      </div>
      
      <div className="container-custom relative z-10 flex flex-col items-center md:items-start text-center md:text-left py-16">
        {/* Logo placeholder */}
        <div className="mb-8 md:mb-12">
          <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mb-4 mx-auto md:mx-0">
            <h2 className="text-3xl font-semibold text-primary">TH</h2>
          </div>
          <h3 className="text-xl font-medium text-primary">Tranquil Haven</h3>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 max-w-2xl">
          Find Your Path to <span className="text-primary">Inner Peace</span> and Wellness
        </h1>
        
        <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-xl">
          Experience our holistic approach to wellness where mind, body, and spirit unite in perfect harmony.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="#booking" className="btn-primary">
            Book a Session
          </Link>
          <Link href="#services" className="btn-secondary">
            Explore Services
          </Link>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-warm/30 rounded-tl-full -z-10"></div>
      <div className="absolute top-1/4 left-0 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
      <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-accent/50 rounded-full -z-10"></div>
    </section>
  );
} 