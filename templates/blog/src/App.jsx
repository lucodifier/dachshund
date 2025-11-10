import Dachshund from '@dachshund_framework/core';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import About from './pages/About';

const app = new Dachshund({
  baseUrl: 'https://dachshund-blog.com',
  scrollToTop: true
});

// Rotas
app.route('/', Home, {
  title: 'Home - Dachshund Framework',
  description: 'Framework React ultra-leve com SEO perfeito, sem SSR',
  keywords: 'dachshund, react, seo, framework',
  image: '/og-home.jpg'
});

app.route('/blog', Blog, {
  title: 'Blog - Dachshund Framework',
  description: 'Artigos sobre React, SEO e desenvolvimento web'
});

app.route('/blog/:id', BlogPost, {
  title: 'Blog Post - Dachshund Framework',
  description: 'Leia nossos artigos sobre React e desenvolvimento web'
});

app.route('/about', About, {
  title: 'Sobre - Dachshund Framework',
  description: 'Conheça o Dachshund Framework e nossa missão'
});

export default app;

