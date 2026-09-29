import React from 'react';
import { useCart } from '../context/CartContext';

export default function Navbar({ onOpenMenu, currentPage, onNavigate }) {
  const { totalCount, setIsCartOpen } = useCart();

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-md border-b border-outline-variant/30 shadow-sm shadow-primary/5 h-20 transition-all duration-300">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-full max-w-container-max-width mx-auto">
        {/* Left: Mobile Menu & Desktop Nav */}
        <div className="flex items-center gap-6">
          <button
            onClick={onOpenMenu}
            aria-label="Open Navigation Menu"
            className="text-primary hover:opacity-70 transition-opacity duration-300 p-2 -ml-2 flex items-center justify-center rounded-full hover:bg-surface-variant/40"
          >
            <span className="material-symbols-outlined text-[24px]">menu</span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => onNavigate('collection')}
              className={`font-label-sm text-label-sm uppercase tracking-widest transition-colors py-1 ${
                currentPage === 'collection'
                  ? 'text-primary font-bold border-b-2 border-primary'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              Collection
            </button>
            <button
              onClick={() => onNavigate('customize')}
              className={`font-label-sm text-label-sm uppercase tracking-widest transition-colors py-1 flex items-center gap-1 ${
                currentPage === 'customize'
                  ? 'text-primary font-bold border-b-2 border-primary'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              <span>✨ Studio</span>
            </button>
            <button
              onClick={() => onNavigate('clean-standards')}
              className={`font-label-sm text-label-sm uppercase tracking-widest transition-colors py-1 ${
                currentPage === 'clean-standards'
                  ? 'text-primary font-bold border-b-2 border-primary'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              Standards
            </button>
            <button
              onClick={() => onNavigate('our-story')}
              className={`font-label-sm text-label-sm uppercase tracking-widest transition-colors py-1 ${
                currentPage === 'our-story'
                  ? 'text-primary font-bold border-b-2 border-primary'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              Our Story
            </button>
          </nav>
        </div>

        {/* Center: Brand Logo */}
        <button
          onClick={() => onNavigate('home')}
          className="font-display-lg text-headline-lg-mobile md:text-headline-lg tracking-tight text-primary hover:opacity-85 transition-all text-center focus:outline-none"
        >
          GLIIMMER
        </button>

        {/* Right: Cart Bag Trigger */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsCartOpen(true)}
            aria-label="Shopping Bag"
            className="text-primary hover:opacity-70 transition-opacity duration-300 p-2 -mr-2 relative flex items-center justify-center rounded-full hover:bg-surface-variant/40"
          >
            <span className="material-symbols-outlined text-[24px]">shopping_bag</span>
            {totalCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-secondary text-on-secondary rounded-full text-[10px] font-bold flex items-center justify-center shadow-sm">
                {totalCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
