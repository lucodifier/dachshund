# 🐕 Dashund

**O doguinho que corre atrás do SEO que o React esqueceu.**

Framework React ultra-leve (~5kb) com SEO perfeito, sem SSR.

## ✨ Features

- ✅ Zero SSR - Sem servidor Node
- ✅ SEO Perfeito - Meta tags, Open Graph, JSON-LD
- ✅ Ultra Leve - ~5kb gzipped
- ✅ Static Generation - HTML pré-renderizado
- ✅ SPA Navigation - Navegação instantânea
- ✅ Dynamic Routes - Suporte a `/blog/:id`

## 📦 Installation

```bash
npm install dashund react react-dom
```

## 🚀 Quick Start

```jsx
import Dashund from 'dashund';

const app = new Dashund();

app.route('/', HomePage, {
  title: 'Home - My Site',
  description: 'Amazing site with perfect SEO'
});

app.start();
```

## 📖 Documentation

Visit [dashund.dev](https://dashund.dev) for full documentation.

## 📄 License

MIT © 2025