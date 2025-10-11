import React from 'react';

export default function Header({ navigate }) {
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Blog', path: '/blog' },
    { label: 'Sobre', path: '/about' }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="text-4xl">🐕</div>
            <div>
              <div className="text-2xl font-bold gradient-text">Dachshund</div>
              <div className="text-xs text-gray-500">Framework</div>
            </div>
          </button>
          
          {/* Navigation */}
          <div className="flex gap-6">
            {navItems.map(item => (
              <button 
                key={item.path}
                onClick={() => navigate(item.path)}
                className="text-gray-600 hover:text-primary-500 font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

