# 🐕 Dachshund

**O doguinho que corre atrás do SEO que o React esqueceu.**

Framework React ultra-leve (~5kb) com SEO perfeito, sem necessidade de SSR (Server-Side Rendering).

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/@dachshund/core.svg)](https://www.npmjs.com/package/@dachshund/core)

---

## ✨ Por que Dachshund?

Cansado da complexidade do Next.js só para ter SEO? O Dachshund resolve isso de forma simples:

- ✅ **Zero SSR** - Sem servidor Node.js necessário
- ✅ **SEO Perfeito** - Meta tags, Open Graph, Twitter Cards e JSON-LD automáticos
- ✅ **Ultra Leve** - ~5kb gzipped (16x menor que Next.js)
- ✅ **Static Generation** - HTML pré-renderizado para cada rota
- ✅ **SPA Navigation** - Navegação instantânea sem reload
- ✅ **Dynamic Routes** - Suporte completo a `/blog/:id` e parâmetros
- ✅ **CLI Integrado** - Gerador de projetos como create-react-app
- ✅ **Deploy Simples** - Funciona em qualquer CDN (Netlify, Vercel, Cloudflare Pages)

---

## 📦 Instalação

### Criar Novo Projeto (Recomendado)

```bash
npx dachshund create meu-projeto
cd meu-projeto
npm run dev
```

### Instalação Manual

```bash
npm install @dachshund/core react react-dom
```

---

## 🚀 Quick Start

### Usando o CLI

```bash
# Criar projeto
dachshund create meu-blog

# Entrar no diretório
cd meu-blog

# Iniciar desenvolvimento
npm run dev

# Build para produção
npm run build
```

### Uso Programático

```jsx
import Dachshund from '@dachshund/core';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

const app = new Dachshund({
  baseUrl: 'https://meusite.com',
  scrollToTop: true
});

// Rotas estáticas
app.route('/', Home, {
  title: 'Home - Meu Site',
  description: 'Site incrível com SEO perfeito',
  keywords: 'react, seo, framework'
});

// Rotas dinâmicas
app.route('/blog/:id', BlogPost, {
  title: 'Blog Post',
  description: 'Leia nossos artigos'
});

// Inicializar app
app.init('root');
```

---

## 📁 Templates Disponíveis

### Blog Template (Padrão)

Blog completo com Tailwind CSS, páginas pré-configuradas e SEO otimizado.

```bash
dachshund create meu-blog --template blog
```

**Inclui:**
- ✅ Home Page com hero e features
- ✅ Blog Listing com cards
- ✅ Blog Post com rotas dinâmicas (`/blog/:id`)
- ✅ About Page
- ✅ Tailwind CSS configurado
- ✅ Componentes reutilizáveis (Header, Footer, Layout, Card)
- ✅ SEO completo e automático

**Estrutura do Projeto:**
```
meu-blog/
├── src/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Blog.jsx
│   │   ├── BlogPost.jsx
│   │   └── About.jsx
│   ├── components/
│   │   ├── Layout.jsx
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Card.jsx
│   ├── data/
│   │   └── posts.js
│   ├── App.jsx
│   └── index.js
├── public/
│   └── styles.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── dachshund.config.js
```

---

## 🛠️ API

### Dachshund Class

```javascript
const app = new Dachshund(config);
```

**Config Options:**
```javascript
{
  baseUrl: 'https://meusite.com',  // URL base do site
  scrollToTop: true                 // Scroll to top na navegação
}
```

### Métodos

#### `app.route(path, Component, seoMeta)`

Define uma rota na aplicação.

```javascript
app.route('/sobre', About, {
  title: 'Sobre - Meu Site',
  description: 'Saiba mais sobre nós',
  keywords: 'sobre, empresa, missão',
  image: '/og-about.jpg',
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Minha Empresa"
  }
});
```

**Rotas Dinâmicas:**
```javascript
app.route('/blog/:id', BlogPost, {
  title: 'Blog Post',
  description: 'Leia nossos artigos'
});

app.route('/produtos/:categoria/:id', Product);
```

#### `app.init(rootId)`

Inicializa a aplicação.

```javascript
app.init('root'); // Monta no elemento #root
```

#### `app.navigate(path)`

Navegação programática.

```javascript
app.navigate('/blog/1');
```

---

## 🎣 Hooks

### `useSEO(seoMeta)`

Atualiza meta tags dinamicamente.

```jsx
import { useSEO } from '@dachshund/core';

function BlogPost({ params }) {
  const post = getPostById(params.id);
  
  useSEO({
    title: `${post.title} | Meu Blog`,
    description: post.excerpt,
    image: post.image,
    keywords: post.tags.join(', '),
    structuredData: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "author": post.author,
      "datePublished": post.date
    }
  });

  return <div>{post.content}</div>;
}
```

### `useParams()`

Acessa parâmetros da rota.

```jsx
import { useParams } from '@dachshund/core';

function BlogPost() {
  const { id } = useParams(); // /blog/:id
  return <h1>Post ID: {id}</h1>;
}
```

### `useNavigate()`

Hook para navegação.

```jsx
import { useNavigate } from '@dachshund/core';

function Header() {
  const navigate = useNavigate();
  
  return (
    <button onClick={() => navigate('/blog')}>
      Ver Blog
    </button>
  );
}
```

---

## ⚙️ Configuração SEO

### `dachshund.config.js`

```javascript
module.exports = {
  global: {
    siteName: 'Meu Site',
    baseUrl: 'https://meusite.com',
    lang: 'pt-BR',
    favicon: '/favicon.ico',
    css: '/styles.css',
    bundle: '/bundle.js',
    defaultImage: '/og-default.jpg'
  },
  routes: {
    '/': {
      seo: {
        title: 'Home - Meu Site',
        description: 'Site incrível com SEO perfeito',
        keywords: 'react, seo, framework',
        image: '/og-home.jpg',
        structuredData: {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Meu Site",
          "url": "https://meusite.com"
        }
      }
    },
    '/blog': {
      seo: {
        title: 'Blog - Todos os Artigos',
        description: 'Artigos sobre tecnologia',
        keywords: 'blog, artigos, tecnologia'
      }
    }
  },
  publicDir: 'public'
};
```

---

## 🎨 Integração com Tailwind CSS

O template vem com Tailwind CSS pré-configurado:

**`tailwind.config.js`:**
```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#667eea',
          600: '#5568d3',
        }
      }
    },
  },
  plugins: [],
}
```

**`public/styles.css`:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn-primary {
    @apply bg-primary-500 hover:bg-primary-600 
           text-white font-semibold py-3 px-8 rounded-lg;
  }
}
```

---

## 🏗️ Build de Produção

```bash
npm run build
```

**O que é gerado:**

```
dist/
├── index.html              # Home com meta tags completas
├── blog/
│   ├── index.html          # Blog listing
│   ├── 1/index.html        # Post 1 com SEO específico
│   ├── 2/index.html        # Post 2 com SEO específico
│   └── 3/index.html        # Post 3 com SEO específico
├── about/index.html        # About page
└── assets/
    ├── bundle.js           # JavaScript otimizado
    └── styles.css          # CSS otimizado
```

**Cada HTML inclui:**
- ✅ Meta tags (`<title>`, `<meta name="description">`)
- ✅ Open Graph tags (`og:title`, `og:description`, `og:image`)
- ✅ Twitter Cards (`twitter:card`, `twitter:title`)
- ✅ JSON-LD structured data
- ✅ Canonical URLs
- ✅ Assets otimizados

---

## 🌐 Deploy

### Netlify

```bash
npm run build
# Deploy a pasta dist/
```

**netlify.toml:**
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Vercel

```bash
npm run build
# Deploy a pasta dist/
```

**vercel.json:**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "routes": [
    { "handle": "filesystem" },
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
```

### Cloudflare Pages

```bash
npm run build
# Deploy a pasta dist/
```

**Configurações:**
- Build command: `npm run build`
- Output directory: `dist`

---

## 🧪 Desenvolvimento Local

### Testar o Framework Localmente

```bash
# No diretório do framework
npm install
npm run build
npm link

# Criar projeto de teste
dachshund create teste-local
cd teste-local
npm link dachshund
npm run dev
```

### Scripts Disponíveis

**No framework:**
```bash
npm run build      # Build do framework
npm run dev        # Watch mode (Rollup)
npm test           # Executar testes
```

**No projeto gerado:**
```bash
npm run dev        # Servidor de desenvolvimento (Vite)
npm run build      # Build de produção
npm run preview    # Preview do build
```

---

## 📊 Comparação

| Feature | Dachshund | Next.js | Create React App |
|---------|---------|---------|------------------|
| **Tamanho** | ~5kb | ~80kb | ~45kb |
| **SSR** | ❌ (SSG) | ✅ | ❌ |
| **SEO** | ✅ Automático | ✅ | ❌ |
| **Servidor** | ❌ | ✅ Necessário | ❌ |
| **Deploy** | Qualquer CDN | Vercel/Node | Qualquer CDN |
| **Complexidade** | 🟢 Baixa | 🟡 Média | 🟢 Baixa |
| **Learning Curve** | 🟢 Suave | 🟡 Íngreme | 🟢 Suave |

---

## 🛠️ Comandos CLI

```bash
# Criar novo projeto
dachshund create <nome-projeto> [--template <template>]

# Build com SEO
dachshund build [--config dachshund.config.js] [--output dist]

# Ver versão
dachshund --version

# Ajuda
dachshund --help
```

---

## 📚 Exemplos

### Blog Completo

```jsx
// src/App.jsx
import Dachshund from '@dachshund/core';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

const app = new Dachshund({
  baseUrl: 'https://meublog.com'
});

app.route('/', Home, {
  title: 'Home - Meu Blog',
  description: 'Blog sobre tecnologia'
});

app.route('/blog', Blog);
app.route('/blog/:id', BlogPost);

export default app;
```

```jsx
// src/pages/BlogPost.jsx
import { useParams, useSEO } from '@dachshund/core';
import { getPostById } from '../data/posts';

export default function BlogPost() {
  const { id } = useParams();
  const post = getPostById(id);

  useSEO({
    title: `${post.title} | Meu Blog`,
    description: post.excerpt,
    image: post.image
  });

  return (
    <article>
      <h1>{post.title}</h1>
      <div>{post.content}</div>
    </article>
  );
}
```

---

## 🤝 Contributing

Contribuições são bem-vindas! Por favor, leia nosso [guia de contribuição](CONTRIBUTING.md) antes de enviar PRs.

### Desenvolvimento

```bash
# Clone o repositório
git clone https://github.com/yourusername/dachshund.git
cd dachshund

# Instalar dependências
npm install

# Build
npm run build

# Testar localmente
npm link
dachshund create teste
cd teste
npm link @dachshund/core
npm run dev
```

---

## 📄 Licença

MIT © 2025

---

## 🙏 Agradecimentos

Inspirado pela necessidade de uma solução simples para SEO no React, sem a complexidade do SSR.

---

## 📞 Suporte

- 📖 **Documentação:** [dachshund.dev](https://dachshund.dev)
- 🐛 **Issues:** [GitHub Issues](https://github.com/yourusername/dachshund/issues)
- 💬 **Discussões:** [GitHub Discussions](https://github.com/yourusername/dachshund/discussions)

---

**Feito com ❤️ e 🐕**

*"O doguinho que corre atrás do SEO que o React esqueceu."*
