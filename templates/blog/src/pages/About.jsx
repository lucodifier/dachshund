import React from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';

export default function About({ navigate }) {
  return (
    <Layout navigate={navigate}>
      <div className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-8">
              Sobre o Dachshund
            </h1>
            
            <div className="bg-white rounded-xl shadow-lg p-12 mb-8">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                O <span className="font-bold gradient-text">Dachshund</span> nasceu da frustração com a complexidade 
                desnecessária do SSR. Por que você precisa de um servidor Node.js apenas para ter SEO?
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Criamos uma solução simples: React puro + Static Site Generation inteligente. 
                O resultado? SEO perfeito com zero complexidade.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <div className="p-8">
                  <h2 className="text-3xl font-bold mb-4">🎯 Missão</h2>
                  <p className="text-gray-600">
                    Democratizar o desenvolvimento web com SEO, oferecendo ferramentas 
                    simples e poderosas para todos.
                  </p>
                </div>
              </Card>

              <Card>
                <div className="p-8">
                  <h2 className="text-3xl font-bold mb-4">💡 Visão</h2>
                  <p className="text-gray-600">
                    Ser a escolha número 1 para desenvolvedores que buscam React + SEO 
                    sem complicação.
                  </p>
                </div>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
              <div className="p-12 text-center">
                <h2 className="text-3xl font-bold mb-4">Open Source</h2>
                <p className="text-lg opacity-90 mb-6">
                  Dachshund é 100% open source e gratuito. Contribua no GitHub!
                </p>
                <a 
                  href="https://github.com/lucodifier/dachshund" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-primary-500 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Ver no GitHub →
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}

