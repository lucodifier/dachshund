import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, navigate }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header navigate={navigate} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

