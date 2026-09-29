import React, { useState } from 'react';
import { PRODUCTS, BRAND_ASSETS } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductDetailWinePage({ onNavigate }) {
  const { addToCart } = useCart();
  const product = PRODUCTS.find((p) => p.id === 'wine-night') || PRODUCTS[1];

  const [selectedShade, setSelectedShade] = useState(product.shades[0]);
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
    <main className="pt-28 pb-32 max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
      {/* Back button */}
      <button
        onClick={() => onNavigate('collection')}
        className="mb-8 inline-flex items-center gap-2 font-label-sm text-xs uppercase tracking-wider text-primary hover:text-secondary transition-colors"
      >
        <span className="material-symbols-outlined text-[18px]">arrow_back</span>
        <span>Back to Collection</span>
      </button>

      {/* Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left: Visual Lookbook Gallery */}
        <div className="space-y-6">
          {/* Main Hero Bottle Visual */}
          <div className="w-full aspect-[4/5] bg-surface-container-low overflow-hidden rounded-2xl relative border border-outline-variant/30 shadow-lg">
            <img
              src={product.image}
              alt="Wine Night nail polish bottle"
              className="w-full h-full object-cover object-center"
            />
            <span className="absolute top-4 left-4 glass-panel px-3 py-1 rounded font-label-sm text-xs text-primary uppercase tracking-wider">
              Iconic Wine Shade
            </span>
          </div>

          {/* Macro Texture Swatch Visual on Skin */}
          <div className="w-full aspect-[16/9] bg-surface-container-lowest overflow-hidden rounded-2xl relative border border-outline-variant/30 shadow-md">
            <img
              src={BRAND_ASSETS.wineTextureSkin}
              alt="Close up texture swatch of Wine Night nail polish on skin"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-4">
              <p className="text-white text-xs tracking-wider uppercase font-label-sm">
                Macro Swatch on Skin • True Tone Opacity
              </p>
            </div>
          </div>
        </div>

        {/* Right: Sticky Product Details */}
        <div className="flex flex-col space-y-8 lg:sticky lg:top-28">
          <div>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.18em] block mb-2">
              {product.collection}
            </span>
            <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-2">
              {product.name}
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
              {product.description}
            </p>
            <p className="font-headline-md text-headline-md text-primary font-semibold">
              ${product.price.toFixed(2)}
            </p>
          </div>

          {/* Shade Selection */}
          <div className="border-t border-outline-variant/30 py-6">
            <h3 className="font-label-sm text-label-sm text-on-surface uppercase mb-3 tracking-widest">
              Shade: <span className="font-bold text-primary">{selectedShade.name}</span>
            </h3>
            <div className="flex space-x-4">
              {product.shades.map((shade) => {
                const isSelected = selectedShade.name === shade.name;
                return (
                  <button
                    key={shade.name}
                    onClick={() => setSelectedShade(shade)}
                    aria-label={shade.name}
                    className={`w-11 h-11 rounded-full border-2 transition-all relative shadow-sm ${
                      isSelected
                        ? 'border-primary ring-2 ring-tertiary-container ring-offset-2 scale-110'
                        : 'border-transparent hover:border-outline-variant'
                    }`}
                    style={{ backgroundColor: shade.hex }}
                  >
                    <div className="swatch-gloss" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Product Specifications */}
          <div className="border-t border-outline-variant/30 py-6">
            <h3 className="font-label-sm text-label-sm text-on-surface uppercase mb-4 tracking-widest">
              Formula Specs
            </h3>
            <ul className="space-y-2.5 font-body-md text-sm text-on-surface-variant list-none">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-tertiary">check_circle</span>
                <span><strong>Volume:</strong> 10ml net weight</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-tertiary">check_circle</span>
                <span><strong>Endurance:</strong> 7-day chip-resistant wear with high shine</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-tertiary">check_circle</span>
                <span><strong>Formulation:</strong> 10-Free, Cruelty-Free, Vegan</span>
              </li>
            </ul>
          </div>

          {/* Optional Personalization */}
          <div className="border-t border-outline-variant/30 py-6">
            <h3 className="font-label-sm text-label-sm text-on-surface uppercase mb-3 tracking-widest">
              Cap Engraving (Optional)
            </h3>
            <div className="relative">
              <input
                id="engraving-input-wine"
                type="text"
                maxLength={15}
                value={engraving}
                onChange={(e) => setEngraving(e.target.value)}
                placeholder="Custom text (Max 15 chars)"
                className="block w-full border-0 border-b border-tertiary-fixed-dim bg-transparent py-2.5 px-0 text-on-surface focus:ring-0 focus:border-primary font-body-md placeholder:text-on-surface-variant/40 transition-colors"
              />
            </div>
            <p className="text-xs text-on-surface-variant mt-2 italic">
              Complimentary laser engraving onto the champagne cap.
            </p>
          </div>

          {/* Desktop Add to Bag CTA */}
          <div className="hidden lg:block pt-2">
            <button
              onClick={handleAdd}
              className="w-full bg-primary text-on-primary font-label-sm text-label-sm py-4 rounded font-semibold border border-tertiary-fixed-dim uppercase tracking-widest gloss-sweep shadow-lg flex justify-center items-center gap-2 hover:bg-primary-container transition-all active:scale-98"
            >
              <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
              <span>{added ? '✓ Added to Bag' : `ADD TO BAG - $${product.price.toFixed(2)}`}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Floating Action Button */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-surface/90 backdrop-blur-md border-t border-outline-variant/30 z-40 lg:hidden shadow-lg">
        <button
          onClick={handleAdd}
          className="w-full bg-primary text-on-primary font-label-sm text-label-sm py-4 rounded border border-tertiary-fixed-dim uppercase tracking-widest gloss-sweep shadow-md flex justify-center items-center gap-2 transition-transform active:scale-98"
        >
          <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
          <span>{added ? '✓ Added to Bag' : `ADD TO BAG - $${product.price.toFixed(2)}`}</span>
        </button>
      </div>
    </main>
  );
}
