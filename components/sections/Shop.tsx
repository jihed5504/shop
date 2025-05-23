import { products } from '../../src/data/mockData';
import ImageWithFallback from '../ImageWithFallback';

export default function Shop() {
  return (
    <section id="shop" className="section-padding bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent/20 rounded-full -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-warm/20 rounded-full translate-y-1/3 -translate-x-1/4"></div>
      
      <div className="container-custom relative">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Our Products</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Wellness Shop</h2>
          <p className="max-w-xl mx-auto text-foreground/80">
            Discover our handpicked collection of premium wellness products to enhance your journey to well-being.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <ImageWithFallback 
                  src={product.image} 
                  alt={product.name}
                  fill
                  className="transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">{product.name}</h3>
                <p className="text-foreground/70 mb-4">{product.description}</p>
                <div className="flex justify-between items-center pt-4 border-t border-muted">
                  <span className="text-lg font-medium text-foreground">${product.price.toFixed(2)}</span>
                  <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="btn-secondary inline-flex items-center gap-2">
            View All Products
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
} 