export const posts = [
  {
    id: 1,
    slug: 'introducao-dachshund',
    title: 'Introdução ao Dachshund Framework',
    excerpt: 'Conheça o framework React mais leve e SEO-friendly do mercado',
    content: `
# Introdução ao Dachshund Framework

O Dachshund é um framework revolucionário que combina a simplicidade do React 
com SEO perfeito, sem a complexidade do SSR.

## Por que Dachshund?

- **Zero SSR**: Deploy em qualquer CDN
- **5kb gzipped**: Ultra leve
- **SEO Perfeito**: Crawlers amam

## Como funciona?

O Dachshund usa Static Site Generation (SSG) inteligente...
    `,
    author: 'João Silva',
    date: '2025-10-10',
    readTime: '5 min',
    category: 'Tutorial',
    image: '/blog/dachshund-intro.jpg',
    tags: ['dachshund', 'react', 'seo']
  },
  {
    id: 2,
    slug: 'seo-react-sem-next',
    title: 'SEO no React sem Next.js',
    excerpt: 'Como ter SEO perfeito sem a complexidade do Server-Side Rendering',
    content: `
# SEO no React sem Next.js

Muitos desenvolvedores acham que precisam do Next.js para ter bom SEO. 
Mas existe uma alternativa mais simples!

## O Problema do SSR

SSR adiciona complexidade desnecessária para muitos projetos...
    `,
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
    content: `
# Tailwind CSS: Best Practices 2025

Tailwind revolucionou o CSS utility-first. Veja como usar da melhor forma.

## Composição de Classes

Use @apply para criar componentes reutilizáveis...
    `,
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

