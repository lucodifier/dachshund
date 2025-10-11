export default {
  global: {
    siteName: 'Dachshund Blog',
    baseUrl: 'https://dachshund-blog.com',
    lang: 'pt-BR',
    favicon: '/favicon.ico',
    css: '/styles.css',
    bundle: '/bundle.js',
    defaultImage: '/og-default.jpg'
  },
  routes: {
    '/': {
      seo: {
        title: 'Home - Dachshund Blog',
        description: 'Blog sobre React, SEO e desenvolvimento web moderno',
        keywords: 'react, seo, blog, dachshund, framework',
        image: '/og-home.jpg',
        structuredData: {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Dachshund Blog",
          "url": "https://dachshund-blog.com",
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
        title: 'Sobre - Dachshund Blog',
        description: 'Conheça o Dachshund Framework e nossa missão'
      }
    }
  },
  publicDir: 'public'
};

