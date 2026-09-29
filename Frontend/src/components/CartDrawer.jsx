import React from 'react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    totalCount
  } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className={`fixed inset-0 bg-on-surface/35 backdrop-blur-sm z-[70] transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Slide-over Drawer */}
      <aside
        className={`fixed inset-y-0 right-0 w-full max-w-md bg-surface-container-lowest z-[75] flex flex-col p-6 shadow-2xl transition-transform duration-300 ease-in-out border-l border-outline-variant/30 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center pb-4 border-b border-outline-variant/20">
          <div>
            <h2 className="font-display-lg text-headline-md text-primary">
              Shopping Bag
            </h2>
            <p className="font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider">
              {totalCount} {totalCount === 1 ? 'Item' : 'Items'} Selected
            </p>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            aria-label="Close bag"
            className="p-2 text-on-surface-variant hover:bg-surface-container-low transition-colors rounded-full"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Item List */}
        <div className="flex-grow overflow-y-auto py-4 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-3">
              <span className="material-symbols-outlined text-4xl text-outline-variant">
                shopping_bag
              </span>
              <p className="font-body-md text-on-surface-variant">Your bag is currently empty.</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-primary font-semibold font-label-sm text-label-sm uppercase tracking-wider underline mt-2"
              >
                Discover the Collection
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-3 bg-surface-container-low/60 rounded-xl border border-outline-variant/20 items-center"
              >
                {/* Thumb */}
                <div className="w-16 h-16 rounded-lg overflow-hidden bg-surface flex-shrink-0 relative border border-outline-variant/30">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  {item.colorHex && (
                    <span
                      className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full border border-white shadow-sm"
                      style={{ backgroundColor: item.colorHex }}
                    />
                  )}
                </div>

                {/* Details */}
                <div className="flex-grow min-w-0">
                  <div className="flex justify-between items-start">
                    <h3 className="font-body-md text-sm font-semibold text-primary truncate">
                      {item.name}
                    </h3>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-outline hover:text-error transition-colors p-1"
                      aria-label="Remove item"
                    >
                      <span className="material-symbols-outlined text-[16px]">delete</span>
                    </button>
                  </div>

                  <p className="text-xs text-on-surface-variant mb-1">
                    Shade: <span className="font-medium text-primary">{item.shade}</span>
                  </p>

                  {item.engraving && (
                    <p className="text-[11px] text-tertiary italic mb-1 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[12px]">edit</span>
                      Engraving: "{item.engraving}"
                    </p>
                  )}

                  <div className="flex justify-between items-center mt-2">
                    {/* Quantity controls */}
                    <div className="flex items-center border border-outline-variant/40 rounded-md bg-surface">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2 py-0.5 text-xs text-on-surface hover:bg-surface-variant transition-colors"
                      >
                        -
                      </button>
                      <span className="px-2.5 py-0.5 text-xs font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-0.5 text-xs text-on-surface hover:bg-surface-variant transition-colors"
                      >
                        +
                      </button>
                    </div>

                    <span className="font-body-md font-semibold text-primary text-sm">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout */}
        {items.length > 0 && (
          <div className="pt-4 border-t border-outline-variant/20 space-y-3">
            <div className="flex justify-between text-xs text-on-surface-variant">
              <span>Complimentary Packaging</span>
              <span className="text-secondary font-medium">Included</span>
            </div>
            <div className="flex justify-between items-end">
              <span className="font-label-sm text-sm uppercase text-on-surface tracking-wider">
                Subtotal
              </span>
              <span className="font-headline-md text-headline-md text-primary font-bold">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            <button
              onClick={() => alert("Thank you for shopping at GLIIMMER! In the full stack version, this connects to the checkout API.")}
              className="w-full bg-primary text-on-primary py-4 rounded-lg font-label-sm text-label-sm tracking-widest uppercase gloss-sweep border border-tertiary-container/50 hover:opacity-95 transition-all shadow-lg active:scale-98 flex justify-center items-center gap-2"
            >
              <span>Proceed to Checkout</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
