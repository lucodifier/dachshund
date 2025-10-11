import Dashund from '@dashund/core';
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
  title: 'Blog Post - Dashund Framework',
  description: 'Leia nossos artigos sobre React e desenvolvimento web'
});

app.route('/about', About, {
  title: 'Sobre - Dashund Framework',
  description: 'Conheça o Dashund Framework e nossa missão'
});

export default app;

