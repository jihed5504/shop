import Link from 'next/link';
import ImageWithFallback from '../ImageWithFallback';
import { heroBackground } from '../../src/utils/imagePlaceholders';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="min-h-screen relative flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src={heroBackground}
          alt="Tranquil setting with plants and meditation space"
          fill
          priority
        />
        <div className="absolute inset-0 bg-primary/30 backdrop-blur-sm"></div>
      </div>
      
      <div className="container-custom relative z-10 flex flex-col items-center md:items-start text-center md:text-left py-16">
        {/* Logo and brand */}
        <div className="mb-8 md:mb-12 bg-background/80 p-4 rounded-lg backdrop-blur-md inline-block">
          <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mb-4 mx-auto md:mx-0">
            <h2 className="text-3xl font-semibold text-primary">TH</h2>
          </div>
          <h3 className="text-xl font-medium text-primary">Tranquil Haven</h3>
        </div>
        
        <div className="bg-background/70 backdrop-blur-md p-8 rounded-lg max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Find Your Path to <span className="text-primary">Inner Peace</span> and Wellness
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/90 mb-10">
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
      </div>
      
      {/* Decorative floating elements */}
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-accent/40 backdrop-blur-md -z-0 animate-float-slow"></div>
      <div className="absolute top-1/4 left-10 w-24 h-24 rounded-full bg-warm/40 backdrop-blur-md -z-0 animate-float-medium"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-secondary/40 backdrop-blur-md -z-0 animate-float-fast"></div>
    </section>
  );
} 