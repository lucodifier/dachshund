export default {
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

