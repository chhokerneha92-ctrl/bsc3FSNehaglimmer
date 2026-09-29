import React from 'react';

export default function NavigationDrawer({ isOpen, onClose, currentPage, onNavigate }) {
  const navItems = [
    { id: 'home', label: 'Home Experience', icon: 'home' },
    { id: 'collection', label: 'The Collection', icon: 'auto_awesome' },
    { id: 'ruby-romance', label: 'Ruby Romance (Lookbook)', icon: 'palette' },
    { id: 'wine-night', label: 'Wine Night (Detail)', icon: 'nightlife' },
    { id: 'customize', label: '✨ Customize Studio', icon: 'camera' },
    { id: 'clean-standards', label: 'Clean Standards', icon: 'sanitizer' },
    { id: 'our-story', label: 'Our Story & Values', icon: 'menu_book' }
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-on-surface/35 backdrop-blur-sm z-[55] transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Drawer Panel */}
      <aside
        className={`fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-surface-container-lowest z-[60] flex flex-col p-6 shadow-2xl transition-transform duration-300 ease-in-out border-r border-outline-variant/30 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-outline-variant/20">
          <span className="font-display-lg text-headline-md text-primary tracking-tight">
            GLIIMMER
          </span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 text-on-surface-variant hover:bg-secondary-container/10 transition-colors rounded-full"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Navigation list */}
        <nav className="flex-grow overflow-y-auto">
          <ul className="space-y-1.5">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      onNavigate(item.id);
                      onClose();
                    }}
                    className={`w-full flex items-center gap-3.5 py-3 px-4 rounded-lg font-body-md text-sm transition-all duration-200 text-left ${
                      isActive
                        ? 'text-secondary font-semibold bg-secondary-container/10 border-l-4 border-secondary'
                        : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-low'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[20px] text-tertiary">
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Drawer Footer */}
        <div className="pt-6 border-t border-outline-variant/20 mt-auto">
          <p className="font-label-sm text-[11px] text-on-surface-variant uppercase tracking-widest text-center">
            Handcrafted Luxury Lacquer
          </p>
          <p className="font-label-sm text-[9px] text-outline text-center mt-1">
            © 2024 GLIIMMER LUXE BOUTIQUE
          </p>
        </div>
      </aside>
    </>
  );
}
