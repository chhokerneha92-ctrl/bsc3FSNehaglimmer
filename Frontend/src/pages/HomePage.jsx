import React from 'react';
import { BRAND_ASSETS, PRODUCTS } from '../data/products';
import ColorSwatch from '../components/ColorSwatch';

export default function HomePage({ onNavigate, onSelectProduct }) {
  const wineCollectionSwatches = [
    { name: "Ruby Romance", gradient: "from-[#8A1538] to-[#4A0B1E]", productId: "ruby-romance" },
    { name: "Wine Night", gradient: "from-[#5C1028] to-[#2E0814]", productId: "wine-night" },
    { name: "Red Velvet", gradient: "from-[#9E1B32] to-[#5C101D]", productId: "velvet-crush" },
    { name: "Garnet Glow", gradient: "from-[#721A2B] to-[#3B0E16]", productId: "garnet-glow" },
    { name: "Midnight Wine", gradient: "from-[#410F1F] to-[#1A060C]", productId: "midnight-wine" },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col justify-center items-center px-margin-mobile md:px-margin-desktop py-16 md:py-24 text-center overflow-hidden">
        {/* Decorative Background Element */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-surface-variant/35 via-background to-background pointer-events-none" />

        <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center gap-6 md:gap-8">
          {/* Logo */}
          <img
            src={BRAND_ASSETS.logo}
            alt="GLIIMMER Logo"
            className="w-32 h-32 md:w-44 md:h-44 object-contain mb-2 drop-shadow-sm transition-transform hover:scale-105 duration-500"
          />

          {/* Main Slogan */}
          <h1 className="font-headline-lg-mobile md:font-display-lg text-headline-lg-mobile md:text-display-lg text-primary tracking-tight leading-tight">
            Your color.<br />
            Your mood.<br />
            Your GLIIMMER.
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto font-light">
            Salon-grade gel brilliance infused with botanical care. Formulated without compromise.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <button
              onClick={() => onNavigate('collection')}
              className="relative overflow-hidden bg-primary-container text-on-primary border border-tertiary-container/50 px-10 py-4 rounded font-label-sm text-label-sm uppercase tracking-widest hover:opacity-90 transition-all duration-300 gloss-sweep shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] active:scale-95"
            >
              Shop Nail Paints
            </button>
            <button
              onClick={() => onNavigate('customize')}
              className="glass-panel text-primary border border-outline-variant/40 px-8 py-4 rounded font-label-sm text-label-sm uppercase tracking-widest hover:bg-surface-container transition-all active:scale-95"
            >
              ✨ Curate Custom Box
            </button>
          </div>
        </div>

        {/* Hero Image Visual (Deep Wine Gloss Bottle) */}
        <div className="mt-14 w-full max-w-md mx-auto aspect-[3/4] relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/15 border border-outline-variant/30 group">
          <div
            className="bg-cover bg-center w-full h-full transform group-hover:scale-105 transition-transform duration-700"
            style={{ backgroundImage: `url('${BRAND_ASSETS.heroBottle}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-4 left-4 right-4 p-4 glass-panel rounded-xl flex justify-between items-center">
            <div>
              <p className="font-label-sm text-[10px] uppercase text-primary tracking-widest">Iconic Shade</p>
              <h3 className="font-headline-md text-base text-primary">Wine Night — Noir Gloss</h3>
            </div>
            <button
              onClick={() => onSelectProduct('wine-night')}
              className="text-xs uppercase tracking-wider font-semibold text-secondary hover:underline"
            >
              View Shade →
            </button>
          </div>
        </div>
      </section>

      {/* Theme Combinations Section */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-t border-b border-outline-variant/20">
        <div className="max-w-container-max-width mx-auto">
          <div className="text-center mb-16">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em] block mb-2">
              Curated Palettes
            </span>
            <h2 className="font-headline-md text-headline-md text-primary mb-3">
              The Wine Collection
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto">
              Curated shades for every mood, from dawn radiance till dusk intrigue.
            </p>
          </div>

          {/* Swatches Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-4xl mx-auto justify-items-center">
            {wineCollectionSwatches.map((swatch, idx) => (
              <div
                key={idx}
                onClick={() => onSelectProduct(swatch.productId)}
                className="flex flex-col items-center gap-4 group cursor-pointer"
              >
                <div className={`w-24 h-24 rounded-full shadow-[inset_0_2px_4px_rgba(255,255,255,0.3)] bg-gradient-to-br ${swatch.gradient} relative overflow-hidden transition-transform duration-300 group-hover:scale-110 ring-1 ring-outline-variant/30 group-hover:ring-2 group-hover:ring-tertiary-container`}>
                  {/* Gloss highlight */}
                  <div className="absolute top-1 left-2 w-10 h-6 bg-white/25 rounded-full blur-sm transform -rotate-45" />
                </div>
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest text-center group-hover:text-secondary transition-colors">
                  {swatch.name}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <button
              onClick={() => onNavigate('collection')}
              className="inline-flex items-center gap-2 font-label-sm text-xs uppercase tracking-widest text-primary hover:text-secondary font-bold transition-colors"
            >
              <span>Explore All Shades & Glitters</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* Editorial Teaser Banner */}
      <section className="py-20 px-margin-mobile md:px-margin-desktop bg-surface-container-low">
        <div className="max-w-container-max-width mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-outline-variant/30">
            <img
              src={BRAND_ASSETS.boxCustomPreview}
              alt="GLIIMMER Gift Box"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">
              Bespoke Experience
            </span>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-primary">
              Curate Your Own GLIIMMER Box
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Select 2 to 4 custom lacquers, choose your signature finishes, and receive custom cap engraving nestled within our velvet-lined luxury gift presentation.
            </p>
            <div>
              <button
                onClick={() => onNavigate('customize')}
                className="bg-primary text-on-primary px-8 py-3.5 rounded font-label-sm text-xs uppercase tracking-widest gloss-sweep border border-tertiary/40 hover:bg-primary-container transition-all"
              >
                Launch Studio
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
