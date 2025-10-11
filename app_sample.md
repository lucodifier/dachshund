# 🐕 Dashund Example App - Blog Completo

Aplicação completa usando Dashund Framework + Tailwind CSS

---

## 📁 Estrutura do Projeto

```
dashund-blog-example/
├── src/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Blog.jsx
│   │   ├── BlogPost.jsx
│   │   ├── About.jsx
│   │   └── NotFound.jsx
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Card.jsx
│   │   └── Layout.jsx
│   ├── data/
│   │   └── posts.js
│   ├── App.jsx
│   └── index.js
├── public/
│   ├── index.html
│   └── styles.css
├── package.json
├── dashund.config.js
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## 📦 package.json

\`\`\`json
{
  "name": "dashund-blog-example",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build && dashund build",
    "preview": "vite preview"
  },
  "dependencies": {
    "dashund": "^1.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32",
    "tailwindcss": "^3.4.0",
    "vite": "^5.0.8"
  }
}
\`\`\`

---

## ⚙️ vite.config.js

\`\`\`javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        entryFileNames: 'bundle.js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
});
\`\`\`

---

## ⚙️ tailwind.config.js

\`\`\`javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f7ff',
          500: '#667eea',
          600: '#5568d3',
          700: '#4451b8'
        },
        secondary: {
          500: '#764ba2',
          600: '#653d8a'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
\`\`\`

---

## ⚙️ dashund.config.js

\`\`\`javascript
module.exports = {
  global: {
    siteName: 'Dashund Blog',
    baseUrl: 'https://dashund-blog.com',
    lang: 'pt-BR',
    favicon: '/favicon.ico',
    css: '/styles.css',
    bundle: '/bundle.js',
    defaultImage: '/og-default.jpg'
  },
  routes: {
    '/': {
      seo: {
        title: 'Home - Dashund Blog',
        description: 'Blog sobre React, SEO e desenvolvimento web moderno',
        keywords: 'react, seo, blog, dashund, framework',
        image: '/og-home.jpg',
        structuredData: {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Dashund Blog",
          "url": "https://dashund-blog.com",
          "description": "Blog sobre desenvolvimento web"
        }
      }
    },
    '/blog': {
      seo: {
        title: 'Blog - Todos os Artigos',
        description: 'Artigos sobre React, SEO e tecnologia',
        keywords: 'artigos, tutoriais, blog'
      }
    },
    '/about': {
      seo: {
        title: 'Sobre - Dashund Blog',
        description: 'Conheça o Dashund Framework e nossa missão'
      }
    }
  },
  publicDir: 'public'
};
\`\`\`

---

## 🎨 public/styles.css

\`\`\`css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn-primary {
    @apply bg-gradient-to-r from-primary-500 to-secondary-500 
           hover:from-primary-600 hover:to-secondary-600
           text-white font-semibold py-3 px-8 rounded-lg 
           transition-all duration-200 transform hover:scale-105
           shadow-lg hover:shadow-xl;
  }
  
  .btn-secondary {
    @apply bg-white hover:bg-gray-50 text-gray-900 
           font-semibold py-3 px-8 rounded-lg 
           border-2 border-gray-200 transition-all duration-200;
  }
  
  .card {
    @apply bg-white rounded-xl shadow-md hover:shadow-xl 
           transition-all duration-300 transform hover:-translate-y-1
           overflow-hidden;
  }
  
  .prose-custom {
    @apply text-gray-700 leading-relaxed;
  }
  
  .prose-custom h2 {
    @apply text-3xl font-bold text-gray-900 mb-4 mt-8;
  }
  
  .prose-custom p {
    @apply mb-4;
  }
  
  .gradient-text {
    @apply bg-gradient-to-r from-primary-500 to-secondary-500 
           bg-clip-text text-transparent;
  }
}

body {
  @apply bg-gray-50;
}
\`\`\`

---

## 📄 public/index.html

\`\`\`html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashund Blog</title>
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/index.js"></script>
</body>
</html>
\`\`\`

---

## 📊 src/data/posts.js

\`\`\`javascript
export const posts = [
  {
    id: 1,
    slug: 'introducao-dashund',
    title: 'Introdução ao Dashund Framework',
    excerpt: 'Conheça o framework React mais leve e SEO-friendly do mercado',
    content: \`
# Introdução ao Dashund Framework

O Dashund é um framework revolucionário que combina a simplicidade do React 
com SEO perfeito, sem a complexidade do SSR.

## Por que Dashund?

- **Zero SSR**: Deploy em qualquer CDN
- **5kb gzipped**: Ultra leve
- **SEO Perfeito**: Crawlers amam

## Como funciona?

O Dashund usa Static Site Generation (SSG) inteligente...
    \`,
    author: 'João Silva',
    date: '2025-10-10',
    readTime: '5 min',
    category: 'Tutorial',
    image: '/blog/dashund-intro.jpg',
    tags: ['dashund', 'react', 'seo']
  },
  {
    id: 2,
    slug: 'seo-react-sem-next',
    title: 'SEO no React sem Next.js',
    excerpt: 'Como ter SEO perfeito sem a complexidade do Server-Side Rendering',
    content: \`
# SEO no React sem Next.js

Muitos desenvolvedores acham que precisam do Next.js para ter bom SEO. 
Mas existe uma alternativa mais simples!

## O Problema do SSR

SSR adiciona complexidade desnecessária para muitos projetos...
    \`,
    author: 'Maria Santos',
    date: '2025-10-08',
    readTime: '8 min',
    category: 'SEO',
    image: '/blog/seo-react.jpg',
    tags: ['seo', 'react', 'performance']
  },
  {
    id: 3,
    slug: 'tailwind-best-practices',
    title: 'Tailwind CSS: Best Practices 2025',
    excerpt: 'Dicas avançadas para usar Tailwind de forma profissional',
    content: \`
# Tailwind CSS: Best Practices 2025

Tailwind revolucionou o CSS utility-first. Veja como usar da melhor forma.

## Composição de Classes

Use @apply para criar componentes reutilizáveis...
    \`,
    author: 'Pedro Costa',
    date: '2025-10-05',
    readTime: '6 min',
    category: 'CSS',
    image: '/blog/tailwind.jpg',
    tags: ['tailwind', 'css', 'design']
  }
];

export const getPostBySlug = (slug) => {
  return posts.find(post => post.slug === slug);
};

export const getPostById = (id) => {
  return posts.find(post => post.id === parseInt(id));
};
\`\`\`

---

## 🧩 src/components/Layout.jsx

\`\`\`jsx
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
\`\`\`

---

## 🧩 src/components/Header.jsx

\`\`\`jsx
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
              <div className="text-2xl font-bold gradient-text">Dashund</div>
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
\`\`\`

---

## 🧩 src/components/Footer.jsx

\`\`\`jsx
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
              <span className="text-xl font-bold">Dashund</span>
            </div>
            <p className="text-gray-400 text-sm">
              O doguinho que corre atrás do SEO que o React esqueceu.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="font-bold mb-4">Produto</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/" className="hover:text-white transition-colors">Documentação</a></li>
              <li><a href="/" className="hover:text-white transition-colors">GitHub</a></li>
              <li><a href="/" className="hover:text-white transition-colors">NPM</a></li>
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
            <h3 className="font-bold mb-4">Social</h3>
            <div className="flex gap-4">
              <a href="#" className="text-2xl hover:text-primary-500 transition-colors">💬</a>
              <a href="#" className="text-2xl hover:text-primary-500 transition-colors">🐦</a>
              <a href="#" className="text-2xl hover:text-primary-500 transition-colors">📧</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© 2025 Dashund Framework. MIT License.</p>
        </div>
      </div>
    </footer>
  );
}
\`\`\`

---

## 🧩 src/components/Card.jsx

\`\`\`jsx
import React from 'react';

export default function Card({ children, className = '', hover = true }) {
  return (
    <div className={\`card \${className} \${hover ? 'hover:-translate-y-1' : ''}\`}>
      {children}
    </div>
  );
}
\`\`\`

---

## 🏠 src/pages/Home.jsx

\`\`\`jsx
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
            Dashund Framework
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
          Por que Dashund?
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
              <code className="text-lg">npm install dashund</code>
            </div>
          </div>
        </Card>
      </section>
    </Layout>
  );
}
\`\`\`

---

## 📝 src/pages/Blog.jsx

\`\`\`jsx
import React from 'react';
import { useSEO } from 'dashund';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { posts } from '../data/posts';

export default function Blog({ navigate }) {
  useSEO({
    title: 'Blog - Últimos Artigos | Dashund',
    description: 'Artigos sobre React, SEO e desenvolvimento web moderno'
  });

  return (
    <Layout navigate={navigate}>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Blog</h1>
        <p className="text-xl text-gray-600 mb-12">
          Artigos, tutoriais e novidades sobre desenvolvimento web
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <Card key={post.id}>
              <div className="h-48 bg-gradient-to-br from-primary-500 to-secondary-500"></div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.author}</span>
                  <button 
                    onClick={() => navigate(\`/blog/\${post.id}\`)}
                    className="text-primary-500 hover:text-primary-700 font-semibold"
                  >
                    Ler mais →
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
\`\`\`

---

## 📄 src/pages/BlogPost.jsx

\`\`\`jsx
import React from 'react';
import { useParams, useSEO } from 'dashund';
import Layout from '../components/Layout';
import { getPostById } from '../data/posts';

export default function BlogPost({ navigate }) {
  const { id } = useParams();
  const post = getPostById(id);

  if (!post) {
    navigate('/404');
    return null;
  }

  useSEO({
    title: \`\${post.title} | Dashund Blog\`,
    description: post.excerpt,
    image: post.image,
    keywords: post.tags.join(', '),
    structuredData: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "datePublished": post.date,
      "description": post.excerpt
    }
  });

  return (
    <Layout navigate={navigate}>
      <article className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <button 
            onClick={() => navigate('/blog')}
            className="text-primary-500 hover:text-primary-700 mb-4 inline-flex items-center gap-2"
          >
            ← Voltar ao blog
          </button>
          
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">
              {post.category}
            </span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full"></div>
            <div>
              <div className="font-semibold">{post.author}</div>
              <div className="text-sm text-gray-500">{post.date}</div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="h-96 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl mb-8"></div>

        {/* Content */}
        <div className="prose prose-lg max-w-none prose-custom">
          {post.content.split('\\n').map((paragraph, i) => (
            <p key={i} className="mb-4">{paragraph}</p>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-gray-700">Tags:</span>
            {post.tags.map(tag => (
              <span 
                key={tag}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Layout>
  );
}
\`\`\`

---

## ℹ️ src/pages/About.jsx

\`\`\`jsx
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
              Sobre o Dashund
            </h1>
            
            <div className="bg-white rounded-xl shadow-lg p-12 mb-8">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                O <span className="font-bold gradient-text">Dashund</span> nasceu da frustração com a complexidade 
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
                  Dashund é 100% open source e gratuito. Contribua no GitHub!
                </p>
                <button className="bg-white text-primary-500 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
                  Ver no GitHub →
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
\`\`\`

---

## 🚀 src/App.jsx

\`\`\`jsx
import Dashund from 'dashund';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import About from './pages/About';

const app = new Dashund({
  baseUrl: 'https://dashund-blog.com',
  scrollToTop: true
});

// Rotas
app.route('/', Home, {
  title: 'Home - Dashund Framework',
  description: 'Framework React ultra-leve com SEO perfeito, sem SSR',
  keywords: 'dashund, react, seo, framework',
  image: '/og-home.jpg'
});

app.route('/blog', Blog, {
  title: 'Blog - Dashund Framework',
  description: 'Artigos sobre React, SEO e desenvolvimento web'
});

app.route('/blog/:id', BlogPost, {
  title: 'Blog