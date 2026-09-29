import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function CollectionPage({ onSelectProduct }) {
  const [filter, setFilter] = useState('all');

  const glossyProducts = PRODUCTS.filter((p) => p.category === "Simple / Glossy");
  const glitterProducts = PRODUCTS.filter((p) => p.category === "Glitter Collection");

  const filteredProducts = filter === 'all'
    ? PRODUCTS
    : filter === 'glossy'
    ? glossyProducts
    : glitterProducts;

  return (
    <main className="flex-grow w-full max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop pt-28 pb-20">
      {/* Header */}
      <div className="mb-12 text-center md:text-left">
        <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.18em] block mb-2">
          High-Gloss Formulations
        </span>
        <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4">
          The Collection
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
          Discover our curated selection of high-shine creams and luminous micro-glitters, formulated with pure botanicals and engineered for 7-day chip-free endurance.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-3 mt-8 justify-center md:justify-start">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2 rounded-full font-label-sm text-xs uppercase tracking-wider transition-all ${
              filter === 'all'
                ? 'bg-primary text-on-primary shadow-sm'
                : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-variant'
            }`}
          >
            All Shades ({PRODUCTS.length})
          </button>
          <button
            onClick={() => setFilter('glossy')}
            className={`px-5 py-2 rounded-full font-label-sm text-xs uppercase tracking-wider transition-all ${
              filter === 'glossy'
                ? 'bg-primary text-on-primary shadow-sm'
                : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-variant'
            }`}
          >
            Simple / Glossy ({glossyProducts.length})
          </button>
          <button
            onClick={() => setFilter('glitter')}
            className={`px-5 py-2 rounded-full font-label-sm text-xs uppercase tracking-wider transition-all ${
              filter === 'glitter'
                ? 'bg-primary text-on-primary shadow-sm'
                : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-variant'
            }`}
          >
            Glitter Collection ({glitterProducts.length})
          </button>
        </div>
      </div>

      {filter === 'all' ? (
        <div className="space-y-16">
          {/* Simple / Glossy Section */}
          <section>
            <div className="mb-6 pb-2 border-b border-outline-variant/40 flex justify-between items-end">
              <div>
                <h2 className="font-headline-md text-headline-md text-primary">
                  Simple / Glossy
                </h2>
                <p className="text-xs text-on-surface-variant">Lustrous single-tone lacquers with a mirror-glass sheen.</p>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                {glossyProducts.length} Shades
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-gutter">
              {glossyProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelectProduct={onSelectProduct}
                />
              ))}
            </div>
          </section>

          {/* Glitter Collection Section */}
          <section>
            <div className="mb-6 pb-2 border-b border-outline-variant/40 flex justify-between items-end">
              <div>
                <h2 className="font-headline-md text-headline-md text-primary">
                  Glitter Collection
                </h2>
                <p className="text-xs text-on-surface-variant">Multidimensional shimmer suspended in deep wine tones.</p>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                {glitterProducts.length} Shades
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-gutter">
              {glitterProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelectProduct={onSelectProduct}
                />
              ))}
            </div>
          </section>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-gutter">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>
      )}
    </main>
  );
}
