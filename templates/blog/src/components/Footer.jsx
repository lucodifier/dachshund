import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🐕</span>
              <span className="text-xl font-bold">Dachshund</span>
            </div>
            <p className="text-gray-400 text-sm">
              O doguinho que corre atrás do SEO que o React esqueceu.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="font-bold mb-4">Produto</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="https://github.com/lucodifier/dachshund" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Documentação</a></li>
              <li><a href="https://github.com/lucodifier/dachshund" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
              <li><a href="https://www.npmjs.com/package/@dachshund_framework/core" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">NPM</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4">Recursos</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="/" className="hover:text-white transition-colors">Exemplos</a></li>
              <li><a href="/" className="hover:text-white transition-colors">Comunidade</a></li>
            </ul>
          </div>
          
          {/* Social */}
          <div>
            <h3 className="font-bold mb-4">Contato</h3>
            <div className="flex gap-4">
              <a href="mailto:lucodifier@gmail.com" className="text-2xl hover:text-primary-500 transition-colors" title="Enviar email">📧</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© 2025 Dachshund Framework. MIT License.</p>
        </div>
      </div>
    </footer>
  );
}

