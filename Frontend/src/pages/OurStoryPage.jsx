import React from 'react';
import { BRAND_ASSETS } from '../data/products';

export default function OurStoryPage({ onNavigate }) {
  const values = [
    {
      title: "Clean Ingredients",
      icon: "sanitizer",
      description: "Formulated without harmful volatile toxins, prioritizing the cellular health of your nails without ever sacrificing high-end performance."
    },
    {
      title: "High-End Finish",
      icon: "auto_awesome",
      description: "Exceptional single-coat opacity and a brilliant, long-lasting mirror shine that rivals a professional UV salon cure without the damage."
    },
    {
      title: "Premium Care",
      icon: "spa",
      description: "Infused with cold-pressed meadowfoam and nourishing botanical extracts, elevating your weekly manicure into a restorative sensory ritual."
    }
  ];

  return (
    <main className="pt-24 pb-28">
      {/* Top Narrative Section */}
      <section className="py-16 md:py-24 px-margin-mobile md:px-margin-desktop max-w-container-max-width mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <span className="font-label-sm text-xs text-secondary uppercase tracking-[0.2em] block">
              The Heritage of GLIIMMER
            </span>
            <h1 className="font-headline-lg-mobile md:font-headline-lg text-primary">
              Uncompromising Quality
            </h1>
            <div className="w-12 h-0.5 bg-tertiary-container mb-6" />

            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              At GLIIMMER, we believe that true luxury shouldn't come at the cost of health. Our journey began with an uncompromising mission: to create a salon-grade lacquer that performs impeccably, dries rapidly, and endures effortlessly—while remaining completely non-toxic and cruelty-free.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Every bottle of GLIIMMER is formulated in small batches, blending rich editorial pigments inspired by haute couture with restorative botanical oils. From the weighty European flint glass bottle to the champagne gold cap, every element is designed to elevate nail care to an art form.
            </p>
          </div>

          <div className="relative order-1 md:order-2 h-[420px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-outline-variant/30">
            <img
              src={BRAND_ASSETS.macroApplication}
              alt="Macro luxury lacquer application"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-surface-container-low px-margin-mobile md:px-margin-desktop border-t border-b border-outline-variant/20">
        <div className="max-w-container-max-width mx-auto">
          <div className="text-center mb-16">
            <span className="font-label-sm text-xs text-secondary uppercase tracking-[0.2em] block mb-2">
              Our Principles
            </span>
            <h2 className="font-headline-md text-headline-md text-primary mb-3">
              Our Core Values
            </h2>
            <div className="w-12 h-0.5 bg-tertiary-container mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto">
            {values.map((v, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-24 h-24 mb-6 rounded-full bg-surface shadow-sm border border-outline-variant/30 flex items-center justify-center p-4 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-3xl text-tertiary">
                    {v.icon}
                  </span>
                </div>
                <h3 className="font-label-sm text-label-sm uppercase text-primary tracking-widest mb-3 font-bold">
                  {v.title}
                </h3>
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop text-center max-w-3xl mx-auto space-y-8">
        <h2 className="font-headline-md text-2xl md:text-3xl text-primary leading-snug">
          Experience the intersection of luxury, art, and clean beauty.
        </h2>
        <div>
          <button
            onClick={() => onNavigate('collection')}
            className="gloss-sweep bg-primary-container text-on-primary border border-tertiary-container/50 px-12 py-4 rounded font-label-sm text-xs uppercase tracking-widest hover:bg-primary transition-all shadow-md shadow-primary/10 active:scale-98"
          >
            Shop The Collections
          </button>
        </div>
      </section>
    </main>
  );
}
