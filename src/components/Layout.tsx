import React from 'react';
import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 lg:bg-white">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="pt-20 pb-20 lg:pt-24 lg:pb-8">
        {children}
      </main>
      <Footer />
      <div className="lg:hidden">
        <Navigation />
      </div>
    </div>
  );
};

export default Layout;