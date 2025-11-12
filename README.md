# 🐕 Dachshund

**The little dog that runs after the SEO that React forgot.**

Ultra-lightweight React framework (~5kb) with perfect SEO, no SSR required.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/@dachshund_framework/core.svg)](https://www.npmjs.com/package/@dachshund_framework/core)

🌐 **[Documentation](https://lucodifier.github.io/dachshund-landing/)** | **[GitHub](https://github.com/lucodifier/dachshund)**

---

## ✨ Why Dachshund?

Tired of Next.js complexity just to have SEO? Dachshund solves this simply:

- ✅ **Zero SSR** - No Node.js server required
- ✅ **Perfect SEO** - Meta tags, Open Graph, Twitter Cards, and JSON-LD automatic
- ✅ **Ultra Lightweight** - ~5kb gzipped (16x smaller than Next.js)
- ✅ **Static Generation** - Pre-rendered HTML for each route
- ✅ **SPA Navigation** - Instant navigation without reload
- ✅ **Dynamic Routes** - Full support for `/blog/:id` and parameters
- ✅ **Built-in CLI** - Project generator like create-react-app
- ✅ **Simple Deploy** - Works on any CDN (Netlify, Vercel, Cloudflare Pages)

---

## 📦 Installation

### Create New Project (Recommended)

```bash
npx create-dachshund my-project
# ou com o novo alias curta
npx dachshund_framework create my-project

cd my-project
npm install
npm run dev
```

### Manual Installation

```bash
npm install @dachshund_framework/core react react-dom
```

---

## 🚀 Quick Start

```jsx
import Dachshund from '@dachshund_framework/core';
import Home from './pages/Home';
import Blog from './pages/Blog';

const app = new Dachshund({
  baseUrl: 'https://mysite.com',
  scrollToTop: true
});

// Static routes
app.route('/', Home, {
  title: 'Home - My Site',
  description: 'Amazing site with perfect SEO',
  keywords: 'react, seo, framework'
});

// Dynamic routes
app.route('/blog/:id', Blog, {
  title: 'Blog Post',
  description: 'Read our articles'
});

// Initialize app
app.init('root');
```

---

## 🎣 Hooks

### `useSEO(seoMeta)`

Update meta tags dynamically.

```jsx
import { useSEO } from '@dachshund_framework/core';

function BlogPost({ params }) {
  const post = getPostById(params.id);
  
  useSEO({
    title: `${post.title} | My Blog`,
    description: post.excerpt,
    image: post.image,
    keywords: post.tags.join(', '),
    structuredData: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "author": post.author
    }
  });

  return <div>{post.content}</div>;
}
```

### `useParams()`

Access route parameters.

```jsx
import { useParams } from '@dachshund_framework/core';

function BlogPost() {
  const { id } = useParams(); // /blog/:id
  return <h1>Post ID: {id}</h1>;
}
```

### `useNavigate()`

Programmatic navigation.

```jsx
import { useNavigate } from '@dachshund_framework/core';

function Header() {
  const navigate = useNavigate();
  
  return (
    <button onClick={() => navigate('/blog')}>
      View Blog
    </button>
  );
}
```

---

## 🏗️ Production Build

```bash
npm run build
```

**What's generated:**

```
dist/
├── index.html              # Home with complete meta tags
├── blog/
│   ├── index.html          # Blog listing
│   ├── 1/index.html        # Post 1 with specific SEO
│   ├── 2/index.html        # Post 2 with specific SEO
│   └── 3/index.html        # Post 3 with specific SEO
├── about/index.html        # About page
└── assets/
    ├── bundle.js           # Optimized JavaScript
    └── styles.css          # Optimized CSS
```

**Each HTML includes:**
- ✅ Meta tags (`<title>`, `<meta name="description">`)
- ✅ Open Graph tags (`og:title`, `og:description`, `og:image`)
- ✅ Twitter Cards (`twitter:card`, `twitter:title`)
- ✅ JSON-LD structured data
- ✅ Canonical URLs
- ✅ Optimized assets

---

## 🌐 Deploy

### Netlify

```bash
npm run build
# Deploy dist/ folder
```

### Vercel

```bash
npm run build
vercel --prod
```

### Cloudflare Pages

```bash
npm run build
# Deploy dist/ folder
```

---

## 📊 Comparison

| Feature | Dachshund | Next.js | Create React App |
|---------|---------|---------|------------------|
| **Size** | ~5kb | ~80kb | ~45kb |
| **SSR** | ❌ (SSG) | ✅ | ❌ |
| **SEO** | ✅ Automatic | ✅ | ❌ |
| **Server** | ❌ | ✅ Required | ❌ |
| **Deploy** | Any CDN | Vercel/Node | Any CDN |
| **Complexity** | 🟢 Low | 🟡 Medium | 🟢 Low |
| **Learning Curve** | 🟢 Easy | 🟡 Steep | 🟢 Easy |

---

## 📚 Full Documentation

Visit **[dachshund.dev](https://lucodifier.github.io/dachshund-landing/)** for complete documentation.

---

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](https://github.com/lucodifier/dachshund/blob/master/CONTRIBUTING.md).

---

## 📄 License

MIT © 2025 Lucodifier

---

## 🙏 Support

- 📖 **Documentation:** [dachshund.dev](https://lucodifier.github.io/dachshund-landing/)
- 🐛 **Issues:** [GitHub Issues](https://github.com/lucodifier/dachshund/issues)
- 💬 **Discussions:** [GitHub Discussions](https://github.com/lucodifier/dachshund/discussions)

---

**Made with ❤️ and 🐕**

*"The little dog that runs after the SEO that React forgot."*

