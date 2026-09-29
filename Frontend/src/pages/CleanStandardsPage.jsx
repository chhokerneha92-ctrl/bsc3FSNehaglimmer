import React from 'react';

export default function CleanStandardsPage({ onNavigate }) {
  const standards = [
    {
      title: "10-Free Purity",
      icon: "verified_user",
      badge: "Formulation",
      description: "Formulated without Formaldehyde, Toluene, DBP, Camphor, Formaldehyde Resin, Xylene, Parabens, Fragrances, Phthalates, or Animal Ingredients. Pure color without toxic volatile fumes."
    },
    {
      title: "Nourishing Botanicals",
      icon: "spa",
      badge: "Ingredients",
      description: "Enriched with cold-pressed meadowfoam seed oil and vitamin E to nourish, fortify, and condition the nail keratin bed even under a prolonged 7-day manicure."
    },
    {
      title: "100% Vegan & Cruelty-Free",
      icon: "cruelty_free",
      badge: "Ethics",
      description: "Never tested on animals, and certified free of carmine or fish scales. We use synthetic minerals and cosmetic-grade mica to capture our signature diamond lustre."
    },
    {
      title: "Sustainable Architecture",
      icon: "recycling",
      badge: "Packaging",
      description: "Packaged in heavyweight, recyclable European flint glass with reusable champagne gold caps designed to be cherished on your vanity indefinitely."
    }
  ];

  const excludedToxins = [
    "Formaldehyde", "Toluene", "Dibutyl Phthalate (DBP)",
    "Formaldehyde Resin", "Camphor", "Ethyl Tosylamide",
    "Xylene", "Parabens", "Triphenyl Phosphate (TPHP)",
    "Lead & Heavy Metals"
  ];

  return (
    <main className="flex-grow w-full max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop pt-28 pb-24 space-y-20">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <span className="font-label-sm text-xs text-secondary uppercase tracking-[0.2em] block">
          Clean Beauty Integrity
        </span>
        <h1 className="font-headline-lg-mobile md:font-headline-lg text-primary">
          Our Clean Standards
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          We believe true luxury shouldn't compromise your health. GLIIMMER is redefining the premium lacquer experience by obsessively formulating with botanical extracts while strictly excluding harmful toxins. Safe, stunning, and relentlessly glossy.
        </p>
      </section>

      {/* 4 Pillars Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {standards.map((s, idx) => (
          <div
            key={idx}
            className="p-8 bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-tertiary/40 group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-[24px]">
                  {s.icon}
                </span>
              </div>
              <div>
                <span className="font-label-sm text-[10px] text-secondary uppercase tracking-widest font-semibold">
                  {s.badge}
                </span>
                <h3 className="font-headline-md text-xl text-primary font-bold">
                  {s.title}
                </h3>
              </div>
            </div>
            <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
              {s.description}
            </p>
          </div>
        ))}
      </section>

      {/* The 10-Free Standard List */}
      <section className="p-8 md:p-12 bg-surface-container-low rounded-3xl border border-outline-variant/30">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="font-headline-md text-2xl text-primary mb-2">
            The 10-Free Guarantee
          </h2>
          <p className="text-sm text-on-surface-variant">
            Every bottle of GLIIMMER is rigorously laboratory-tested to ensure complete exclusion of the 10 most common toxic chemicals found in conventional nail polishes.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 max-w-4xl mx-auto">
          {excludedToxins.map((toxin, i) => (
            <div
              key={i}
              className="p-3 bg-surface rounded-xl border border-outline-variant/30 text-center flex flex-col items-center justify-center gap-1 shadow-xs"
            >
              <span className="material-symbols-outlined text-[18px] text-secondary">
                block
              </span>
              <span className="font-label-sm text-[11px] text-primary font-medium">
                {toxin}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center pt-8">
        <h2 className="font-headline-md text-2xl text-primary mb-4">
          Ready for conscious glamour?
        </h2>
        <button
          onClick={() => onNavigate('collection')}
          className="bg-primary text-on-primary px-10 py-4 rounded font-label-sm text-xs uppercase tracking-widest gloss-sweep border border-tertiary-container/50 hover:bg-primary-container transition-all shadow-md active:scale-98"
        >
          Explore Clean Lacquers
        </button>
      </section>
    </main>
  );
}
