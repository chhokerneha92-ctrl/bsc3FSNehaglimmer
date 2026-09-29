import React, { useState } from 'react';
import { BRAND_ASSETS, CUSTOM_STUDIO_SHADES } from '../data/products';
import { useCustomization } from '../context/CustomizationContext';
import { useCart } from '../context/CartContext';

export default function CustomizePage({ onNavigate }) {
  const {
    selectedShades,
    selectedShadeObjects,
    toggleShade,
    finish,
    setFinish,
    comboName,
    setComboName,
    message,
    setMessage
  } = useCustomization();

  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  // Dynamic set pricing: 2 shades = $48, 3 shades = $64, 4 shades = $78 (saving up to 25%)
  const priceMap = {
    1: 28.00,
    2: 48.00,
    3: 64.00,
    4: 78.00
  };
  const setPrice = priceMap[selectedShades.length] || 48.00;

  const handleAddSet = () => {
    const shadeNames = selectedShadeObjects.map((s) => s.name).join(', ');
    addToCart(
      {
        id: `custom-box-${Date.now()}`,
        name: comboName ? `GLIIMMER Set: ${comboName}` : `Bespoke Set (${selectedShades.length} Shades)`,
        price: setPrice,
        image: BRAND_ASSETS.boxCustomPreview,
        cardImage: BRAND_ASSETS.boxCustomPreview
      },
      {
        shade: `${finish} Finish • [${shadeNames}]`,
        engraving: message ? message.slice(0, 20) : '',
        quantity: 1
      }
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="flex-grow pt-28 pb-32 px-margin-mobile md:px-margin-desktop flex flex-col gap-10 max-w-3xl mx-auto w-full">
      {/* Header Section */}
      <section className="text-center space-y-2">
        <span className="font-label-sm text-xs text-secondary uppercase tracking-[0.2em] block">
          The Bespoke Atelier
        </span>
        <h1 className="font-headline-lg-mobile md:font-headline-lg text-primary">
          ✨ Customize Your GLIIMMER
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-lg mx-auto">
          Select 2 to 4 artisanal shades to curate your signature gift box. Packaged in custom velvet with complimentary engraved message.
        </p>
      </section>

      {/* Preview Image Area */}
      <section className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-2xl overflow-hidden bg-surface-container shadow-md border border-outline-variant/30">
        <img
          src={BRAND_ASSETS.boxCustomPreview}
          alt="Curated Luxury Gift Box"
          className="object-cover w-full h-full"
        />

        {/* Floating interactive counter pill */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 glass-panel px-5 py-2 rounded-full border border-outline-variant/30 text-label-sm font-label-sm text-primary flex items-center gap-2.5 shadow-lg">
          <span className="material-symbols-outlined text-[18px] text-tertiary">palette</span>
          <span className="font-bold">{selectedShades.length}/4 Shades Selected</span>
        </div>

        {/* Selected shades preview chips floating top-right */}
        <div className="absolute top-4 right-4 flex gap-1.5 glass-panel p-2 rounded-full border border-outline-variant/30">
          {selectedShadeObjects.map((s) => (
            <span
              key={s.id}
              className="w-4 h-4 rounded-full border border-white shadow-sm"
              style={{ backgroundColor: s.hex }}
              title={s.name}
            />
          ))}
        </div>
      </section>

      {/* Studio Controls */}
      <div className="flex flex-col gap-10 bg-surface-container-lowest p-6 md:p-8 rounded-2xl border border-outline-variant/30 shadow-sm">
        {/* Step 1: Base Colors */}
        <section className="space-y-4">
          <div className="flex justify-between items-end border-b border-outline-variant/20 pb-2">
            <div>
              <h2 className="font-headline-md text-xl font-medium text-primary">
                1. Choose Shades
              </h2>
              <p className="text-xs text-on-surface-variant">Tap to select between 2 to 4 custom tones.</p>
            </div>
            <span className="font-label-sm text-xs text-secondary font-bold uppercase tracking-wider">
              {selectedShades.length < 2 ? 'Select at least 2' : `${selectedShades.length} of 4 selected`}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            {CUSTOM_STUDIO_SHADES.map((swatch) => {
              const isSelected = selectedShades.includes(swatch.id);
              return (
                <button
                  key={swatch.id}
                  onClick={() => toggleShade(swatch.id)}
                  type="button"
                  className={`p-3 rounded-xl border flex flex-col items-center gap-3 transition-all ${
                    isSelected
                      ? 'border-primary bg-primary/5 shadow-md'
                      : 'border-outline-variant/30 hover:border-outline hover:bg-surface-container-low'
                  }`}
                >
                  <div
                    className="w-16 h-16 rounded-full glossy-swatch relative shadow-md flex items-center justify-center transition-transform hover:scale-105"
                    style={{ backgroundColor: swatch.hex }}
                  >
                    {/* Active Check */}
                    {isSelected && (
                      <div className="w-7 h-7 rounded-full bg-black/40 backdrop-blur-xs flex items-center justify-center text-white">
                        <span className="material-symbols-outlined text-[18px]">check</span>
                      </div>
                    )}
                    <div className="swatch-gloss" />
                  </div>
                  <span className={`font-label-sm text-xs uppercase tracking-wider text-center ${
                    isSelected ? 'text-primary font-bold' : 'text-on-surface-variant'
                  }`}>
                    {swatch.name}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Step 2: Finish Selection */}
        <section className="space-y-4">
          <div className="border-b border-outline-variant/20 pb-2">
            <h2 className="font-headline-md text-xl font-medium text-primary">
              2. Select Formula Finish
            </h2>
            <p className="text-xs text-on-surface-variant">Choose the cured finish profile for this set.</p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {["Simple", "Gloss", "Glitter"].map((f) => {
              const isActive = finish === f;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFinish(f)}
                  className={`py-3 px-3 rounded-xl border font-label-sm text-xs uppercase tracking-wider transition-all text-center ${
                    isActive
                      ? 'border-tertiary-container bg-primary-container text-on-primary shadow-md'
                      : 'border-outline-variant/50 bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container'
                  }`}
                >
                  {f === 'Gloss' && '✨ '}
                  {f} Finish
                </button>
              );
            })}
          </div>
        </section>

        {/* Step 3: Personalization Inputs */}
        <section className="space-y-6 pt-2">
          <div className="border-b border-outline-variant/20 pb-2">
            <h2 className="font-headline-md text-xl font-medium text-primary">
              3. Personalize Details
            </h2>
            <p className="text-xs text-on-surface-variant">Add a bespoke name and personal gift note.</p>
          </div>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="combo-name"
                className="font-label-sm text-xs uppercase tracking-wider text-on-surface block mb-1"
              >
                Name Your Curated Combo
              </label>
              <input
                id="combo-name"
                type="text"
                value={comboName}
                onChange={(e) => setComboName(e.target.value)}
                placeholder="e.g. Autumn In Florence"
                className="w-full bg-transparent border-0 border-b border-tertiary/50 focus:border-primary focus:ring-0 px-0 py-2 text-body-md text-primary placeholder:text-on-surface-variant/40 transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="personal-msg"
                className="font-label-sm text-xs uppercase tracking-wider text-on-surface block mb-1"
              >
                Personal Gift Message (Optional)
              </label>
              <textarea
                id="personal-msg"
                rows={2}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Printed on a bespoke gold-embossed card inside the box..."
                className="w-full bg-transparent border-0 border-b border-tertiary/50 focus:border-primary focus:ring-0 px-0 py-2 text-body-md text-primary placeholder:text-on-surface-variant/40 transition-colors resize-none"
              />
            </div>
          </div>
        </section>

        {/* Set Summary & Action */}
        <div className="pt-6 border-t border-outline-variant/30 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-headline-md text-2xl text-primary font-bold">
                ${setPrice.toFixed(2)}
              </span>
              <span className="text-xs text-on-surface-variant line-through">
                ${(selectedShades.length * 28).toFixed(2)}
              </span>
              <span className="text-xs bg-secondary-container/20 text-secondary px-2 py-0.5 rounded font-semibold">
                Save ~20%
              </span>
            </div>
            <p className="text-xs text-on-surface-variant mt-0.5">
              Includes bespoke velvet gift box & free shipping.
            </p>
          </div>

          <button
            onClick={handleAddSet}
            disabled={selectedShades.length < 2}
            className={`w-full sm:w-auto px-8 py-4 rounded-lg font-label-sm text-xs uppercase tracking-widest border transition-all ${
              selectedShades.length < 2
                ? 'opacity-50 cursor-not-allowed bg-outline-variant text-on-surface'
                : 'bg-primary text-on-primary border-tertiary-container/50 gloss-sweep shadow-lg hover:bg-primary-container active:scale-98'
            }`}
          >
            {added ? '✓ Custom Set Added!' : 'Add Set to Bag'}
          </button>
        </div>
      </div>
    </main>
  );
}
