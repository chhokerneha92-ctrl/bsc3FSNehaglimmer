import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { CustomizationProvider } from './context/CustomizationContext';

import Navbar from './components/Navbar';
import NavigationDrawer from './components/NavigationDrawer';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import CollectionPage from './pages/CollectionPage';
import ProductDetailRubyPage from './pages/ProductDetailRubyPage';
import ProductDetailWinePage from './pages/ProductDetailWinePage';
import CustomizePage from './pages/CustomizePage';
import CleanStandardsPage from './pages/CleanStandardsPage';
import OurStoryPage from './pages/OurStoryPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sync state with URL hash for browser history / direct linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && ['home', 'collection', 'ruby-romance', 'wine-night', 'customize', 'clean-standards', 'our-story'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (pageId) => {
    window.location.hash = pageId;
    setCurrentPage(pageId);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (productId) => {
    if (productId === 'ruby-romance') {
      navigateTo('ruby-romance');
    } else if (productId === 'wine-night') {
      navigateTo('wine-night');
    } else {
      navigateTo('collection');
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigateTo} onSelectProduct={handleSelectProduct} />;
      case 'collection':
        return <CollectionPage onSelectProduct={handleSelectProduct} />;
      case 'ruby-romance':
        return <ProductDetailRubyPage onNavigate={navigateTo} />;
      case 'wine-night':
        return <ProductDetailWinePage onNavigate={navigateTo} />;
      case 'customize':
        return <CustomizePage onNavigate={navigateTo} />;
      case 'clean-standards':
        return <CleanStandardsPage onNavigate={navigateTo} />;
      case 'our-story':
        return <OurStoryPage onNavigate={navigateTo} />;
      default:
        return <HomePage onNavigate={navigateTo} onSelectProduct={handleSelectProduct} />;
    }
  };

  return (
    <CartProvider>
      <CustomizationProvider>
        <div className="min-h-screen flex flex-col bg-background text-on-background relative selection:bg-secondary/20 selection:text-primary">
          {/* Main Top Navigation */}
          <Navbar
            onOpenMenu={() => setIsMenuOpen(true)}
            currentPage={currentPage}
            onNavigate={navigateTo}
          />

          {/* Slide-over Navigation Drawer */}
          <NavigationDrawer
            isOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
            currentPage={currentPage}
            onNavigate={navigateTo}
          />

          {/* Slide-over Shopping Cart Drawer */}
          <CartDrawer />

          {/* Active Page View */}
          <div className="flex-grow">
            {renderCurrentPage()}
          </div>

          {/* Main Footer */}
          <Footer onNavigate={navigateTo} />
        </div>
      </CustomizationProvider>
    </CartProvider>
  );
}
