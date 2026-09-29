import React, { useState } from 'react';

export default function Footer({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-surface-container-low w-full py-20 border-t border-outline-variant/20 mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max-width mx-auto">
        {/* Newsletter */}
        <div className="md:col-span-2 mb-12 md:mb-0">
          <h3 className="font-headline-md text-headline-md text-primary mb-3">
            Join the List
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6 max-w-sm">
            Subscribe for exclusive access to new seasonal collections, private sales, and editorial insights.
          </p>

          {subscribed ? (
            <div className="p-3 bg-secondary-container/10 border border-secondary/30 rounded-md max-w-sm text-secondary font-medium text-sm">
              ✨ Welcome to the GLIIMMER circle. Your invitation will arrive shortly.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-4 max-w-sm">
              <div className="relative w-full">
                <input
                  type="email"
                  id="newsletter-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                  className="w-full bg-transparent border-0 border-b border-tertiary-container focus:ring-0 focus:border-primary px-0 py-2 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/50 transition-colors"
                />
                <label
                  htmlFor="newsletter-email"
                  className="sr-only"
                >
                  Email Address
                </label>
              </div>
              <button
                type="submit"
                aria-label="Subscribe"
                className="text-primary hover:text-secondary transition-colors duration-200 flex items-center p-2"
              >
                <span className="material-symbols-outlined text-[24px]">arrow_forward</span>
              </button>
            </form>
          )}
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <span className="font-label-sm text-xs text-primary uppercase tracking-widest font-bold mb-2">
            Navigation
          </span>
          <button
            onClick={() => onNavigate && onNavigate('collection')}
            className="text-left font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-200"
          >
            The Collection
          </button>
          <button
            onClick={() => onNavigate && onNavigate('customize')}
            className="text-left font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-200"
          >
            Customize Studio
          </button>
          <button
            onClick={() => onNavigate && onNavigate('clean-standards')}
            className="text-left font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-200"
          >
            Clean Standards
          </button>
          <button
            onClick={() => onNavigate && onNavigate('our-story')}
            className="text-left font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-200"
          >
            Our Story
          </button>
        </div>

        {/* Brand & Legal */}
        <div className="flex flex-col items-start md:items-end justify-between mt-8 md:mt-0">
          <div className="font-display-lg text-headline-lg text-primary tracking-tight mb-6">
            GLIIMMER
          </div>
          <div className="space-y-1 text-left md:text-right">
            <p className="font-label-sm text-[11px] text-primary uppercase tracking-wider">
              Handcrafted Luxury Lacquers
            </p>
            <p className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-widest">
              © 2024 GLIIMMER LUXE LACQUER. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
