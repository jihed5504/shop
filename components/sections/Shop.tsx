import Image from 'next/image';
import { products } from '../../src/data/mockData';

export default function Shop() {
  return (
    <section id="shop" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Wellness Shop</h2>
          <p className="max-w-xl mx-auto text-foreground/80">
            Discover our handpicked collection of premium wellness products to enhance your journey to well-being.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1"
            >
              <div className="aspect-square relative bg-muted">
                {/* Image placeholder */}
                <div className="absolute inset-0 flex items-center justify-center bg-warm/30">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary">Image</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-foreground/70 mb-4 text-sm">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-primary">${product.price.toFixed(2)}</span>
                  <button className="bg-secondary px-4 py-2 rounded text-sm text-foreground font-medium hover:bg-secondary/80 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="btn-secondary">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
} 