import React from 'react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product, onSelectProduct }) {
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.stopPropagation();
    addToCart(product, {
      quantity: 1,
      shade: product.shades?.[0]?.name || product.name,
      shadeHex: product.shades?.[0]?.hex || product.colorHex
    });
  };

  const handleCardClick = () => {
    if (onSelectProduct) {
      onSelectProduct(product.id);
    }
  };

  return (
    <article
      onClick={handleCardClick}
      className="group relative flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 border border-outline-variant/20 cursor-pointer"
    >
      {/* Product Image Area */}
      <div className="relative w-full pt-[120%] bg-surface-container-low overflow-hidden">
        <img
          src={product.cardImage || product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
          <span className="bg-surface/90 backdrop-blur-sm px-2.5 py-1 rounded font-label-sm text-[10px] md:text-label-sm text-primary tracking-wider uppercase border border-outline-variant/30">
            {product.finish || 'Glossy'}
          </span>
        </div>

        {/* Quick Add Overlay (Desktop) */}
        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block z-10">
          <button
            onClick={handleQuickAdd}
            className="w-full glass-panel bg-primary text-on-primary py-3 rounded-lg font-label-sm text-label-sm tracking-widest uppercase gloss-sweep border border-tertiary-container/50 hover:bg-primary-container transition-all shadow-md active:scale-95"
          >
            Quick Add
          </button>
        </div>
      </div>

      {/* Product Metadata */}
      <div className="p-4 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-body-md text-body-md text-on-surface font-semibold group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <span className="font-body-md text-body-md text-primary font-medium">
              ${product.price.toFixed(2)}
            </span>
          </div>
          <p className="font-label-sm text-[11px] text-on-surface-variant line-clamp-1 mb-3">
            {product.collection}
          </p>
        </div>

        <div>
          <p className="font-label-sm text-[10px] md:text-label-sm text-on-surface-variant uppercase mb-4 pt-1 flex items-center gap-1.5 border-t border-outline-variant/20">
            <span className="material-symbols-outlined text-[14px] text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
              timelapse
            </span>
            {product.wear || '7-Day Wear'}
          </p>

          {/* Mobile Add Button */}
          <button
            onClick={handleQuickAdd}
            className="w-full bg-primary text-on-primary gloss-sweep py-2.5 rounded-lg font-label-sm text-label-sm tracking-widest uppercase md:hidden active:scale-95 transition-transform"
          >
            Add to Bag
          </button>
        </div>
      </div>
    </article>
  );
}
