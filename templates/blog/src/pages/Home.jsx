import React from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';

export default function Home({ navigate }) {
  const features = [
    {
      icon: '⚡',
      title: 'Ultra Rápido',
      description: 'SPA navigation sem reload. Navegação instantânea entre páginas.'
    },
    {
      icon: '🔍',
      title: 'SEO Perfeito',
      description: 'Meta tags, Open Graph, Twitter Cards e JSON-LD automáticos.'
    },
    {
      icon: '📦',
      title: 'Zero Config',
      description: 'Funciona out-of-the-box. Sem configurações complexas.'
    },
    {
      icon: '🪶',
      title: 'Ultra Leve',
      description: '~5kb gzipped. 16x menor que Next.js.'
    },
    {
      icon: '🚀',
      title: 'Deploy Simples',
      description: 'Qualquer CDN: Netlify, Vercel, Cloudflare Pages.'
    },
    {
      icon: '🎯',
      title: 'Rotas Dinâmicas',
      description: 'Suporte completo a /blog/:id e parâmetros.'
    }
  ];

  return (
    <Layout navigate={navigate}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">🐕</div>
          <h1 className="text-6xl font-bold text-gray-900 mb-4">
            Dachshund Framework
          </h1>
          <p className="text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            O doguinho que corre atrás do <span className="gradient-text font-bold">SEO</span> que o React esqueceu
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => navigate('/blog')}
              className="btn-primary"
            >
              Ver Blog
            </button>
            <button 
              onClick={() => navigate('/about')}
              className="btn-secondary"
            >
              Saiba Mais
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-4xl font-bold gradient-text mb-2">~5kb</div>
              <div className="text-gray-600">Gzipped</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-4xl font-bold gradient-text mb-2">0</div>
              <div className="text-gray-600">Servidor Node</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-4xl font-bold gradient-text mb-2">100%</div>
              <div className="text-gray-600">SEO Score</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Por que Dachshund?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <Card key={i}>
              <div className="p-6">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
          <div className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Pronto para começar?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Instale agora e crie seu primeiro site em minutos
            </p>
            <div className="bg-black/20 rounded-lg p-6 max-w-md mx-auto">
              <code className="text-lg">npm install dachshund</code>
            </div>
          </div>
        </Card>
      </section>
    </Layout>
  );
}

