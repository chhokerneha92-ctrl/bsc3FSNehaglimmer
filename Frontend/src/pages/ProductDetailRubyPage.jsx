import React, { useState } from 'react';
import { PRODUCTS, BRAND_ASSETS } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductDetailRubyPage({ onNavigate }) {
  const { addToCart } = useCart();
  const product = PRODUCTS.find((p) => p.id === 'ruby-romance') || PRODUCTS[0];

  const [selectedShade, setSelectedShade] = useState(product.shades[1] || product.shades[0]);
  const [engraving, setEngraving] = useState('');
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product, {
      quantity: 1,
      shade: selectedShade.name,
      shadeHex: selectedShade.hex,
      engraving: engraving.trim()
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="pt-20 pb-32">
      {/* Top Hero Image */}
      <section className="relative w-full h-[460px] md:h-[580px] bg-surface-container-low flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface/50 z-10" />
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Back Link */}
        <button
          onClick={() => onNavigate('collection')}
          className="absolute top-6 left-6 z-20 glass-panel px-4 py-2 rounded-full font-label-sm text-xs uppercase tracking-wider text-primary flex items-center gap-1.5 hover:bg-surface transition-all"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          <span>Collection</span>
        </button>
      </section>

      {/* Product Details Panel */}
      <section className="relative z-20 bg-surface rounded-t-3xl -mt-10 px-margin-mobile md:px-margin-desktop pt-8 pb-12 max-w-3xl mx-auto shadow-[0_-10px_40px_rgba(90,16,32,0.06)] border-t border-outline-variant/30">
        <div className="flex flex-col gap-2 mb-8">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-[0.18em]">
            {product.collection}
          </span>
          <div className="flex justify-between items-end">
            <h1 className="font-headline-lg-mobile md:font-headline-lg text-primary">
              {product.name}
            </h1>
            <span className="font-headline-md text-headline-md text-primary font-semibold">
              ${product.price.toFixed(2)}
            </span>
          </div>
          <p className="font-body-md text-on-surface-variant text-sm mt-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Shade Selector */}
        <div className="mb-10 p-5 bg-surface-container-lowest rounded-2xl border border-outline-variant/30">
          <div className="flex justify-between items-center mb-4">
            <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider">
              Select Shade
            </span>
            <span className="font-body-md text-sm font-semibold text-primary">
              {selectedShade.name}
            </span>
          </div>
          <div className="flex gap-4">
            {product.shades.map((shade) => {
              const isSelected = selectedShade.name === shade.name;
              return (
                <button
                  key={shade.name}
                  onClick={() => setSelectedShade(shade)}
                  aria-label={shade.name}
                  className={`relative w-12 h-12 rounded-full transition-all duration-200 ${
                    isSelected
                      ? 'ring-2 ring-primary ring-offset-2 ring-offset-surface scale-110 shadow-md'
                      : 'ring-1 ring-outline-variant/40 hover:scale-105'
                  }`}
                >
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: shade.hex }}
                  />
                  <div className="swatch-gloss" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-3 gap-2 mb-10 bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-4">
          <div className="flex flex-col items-center justify-center text-center gap-1.5 p-2">
            <span
              className="material-symbols-outlined text-tertiary-container text-xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              auto_awesome
            </span>
            <span className="font-label-sm text-[10px] text-on-surface-variant uppercase">
              Finish
            </span>
            <span className="font-body-md text-on-surface text-sm font-semibold">
              {product.finish}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center text-center gap-1.5 p-2 border-l border-r border-outline-variant/30">
            <span className="material-symbols-outlined text-tertiary-container text-xl">
              timer
            </span>
            <span className="font-label-sm text-[10px] text-on-surface-variant uppercase">
              Wear
            </span>
            <span className="font-body-md text-on-surface text-sm font-semibold">
              {product.wear}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center text-center gap-1.5 p-2">
            <span className="material-symbols-outlined text-tertiary-container text-xl">
              water_drop
            </span>
            <span className="font-label-sm text-[10px] text-on-surface-variant uppercase">
              Volume
            </span>
            <span className="font-body-md text-on-surface text-sm font-semibold">
              {product.volume}
            </span>
          </div>
        </div>

        {/* Design Preview */}
        <div className="mb-10">
          <h2 className="font-label-sm text-label-sm text-on-surface uppercase mb-3 tracking-wider">
            Bespoke Bottle Design
          </h2>
          <div className="w-full h-44 rounded-xl overflow-hidden relative border border-outline-variant/30 shadow-sm">
            <img
              src={BRAND_ASSETS.bottleCapEngraved}
              alt="GLIIMMER Bottle Engraving"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Personalization */}
        <div className="mb-8 p-5 bg-surface-container-lowest rounded-2xl border border-outline-variant/30">
          <label
            htmlFor="cap-engraving-ruby"
            className="font-label-sm text-label-sm text-on-surface uppercase block mb-1 tracking-wider"
          >
            Complimentary Cap Engraving (Optional)
          </label>
          <div className="relative">
            <input
              id="cap-engraving-ruby"
              type="text"
              maxLength={15}
              value={engraving}
              onChange={(e) => setEngraving(e.target.value)}
              placeholder="e.g. For Eleanor"
              className="w-full bg-transparent border-0 border-b border-tertiary/60 focus:ring-0 focus:border-primary font-body-md text-body-md px-0 py-2.5 text-on-surface placeholder:text-on-surface-variant/40 transition-colors"
            />
          </div>
          <p className="font-body-md text-on-surface-variant text-xs mt-2 italic">
            Precision laser engraved onto the champagne gold bottle cap. Up to 15 characters.
          </p>
        </div>
      </section>

      {/* Sticky Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 w-full z-50 bg-surface/90 backdrop-blur-xl border-t border-outline-variant/30 px-margin-mobile md:px-margin-desktop py-4 shadow-[0_-4px_25px_rgba(0,0,0,0.06)]">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden sm:block">
            <p className="text-xs font-semibold text-primary">{product.name} — {selectedShade.name}</p>
            <p className="text-[11px] text-on-surface-variant">Includes Complimentary Gift Box</p>
          </div>

          <button
            onClick={handleAdd}
            className="w-full sm:w-auto sm:min-w-[280px] bg-primary-container text-on-primary py-4 px-8 rounded-full font-label-sm text-label-sm tracking-widest uppercase overflow-hidden flex justify-between items-center border border-tertiary/40 shadow-md hover:bg-primary transition-all active:scale-98 gloss-sweep"
          >
            <span>{added ? '✓ Added to Bag' : 'Add to Bag'}</span>
            <span className="font-body-md font-semibold text-sm">
              ${product.price.toFixed(2)}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
