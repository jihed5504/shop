import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background/80 backdrop-blur-md fixed w-full z-50 shadow-sm">
      <div className="container-custom flex justify-between items-center py-4">
        {/* Logo */}
        <Link href="#hero" className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-2">
            <span className="text-lg font-semibold text-primary">TH</span>
          </div>
          <span className="text-xl font-medium text-primary">Tranquil Haven</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#hero" className="text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="#booking" className="text-foreground hover:text-primary transition-colors">
            Book
          </Link>
          <Link href="#shop" className="text-foreground hover:text-primary transition-colors">
            Shop
          </Link>
          <Link href="#testimonials" className="text-foreground hover:text-primary transition-colors">
            Testimonials
          </Link>
          <Link href="#contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-background border-t border-secondary/20 py-4">
          <div className="container-custom flex flex-col space-y-4">
            <Link 
              href="#hero" 
              className="text-foreground hover:text-primary transition-colors px-2 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="#booking" 
              className="text-foreground hover:text-primary transition-colors px-2 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book
            </Link>
            <Link 
              href="#shop" 
              className="text-foreground hover:text-primary transition-colors px-2 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              href="#testimonials" 
              className="text-foreground hover:text-primary transition-colors px-2 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              href="#contact" 
              className="text-foreground hover:text-primary transition-colors px-2 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
} 