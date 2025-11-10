import React from 'react';
import { useParams, useSEO } from '@dachshund_framework/core';
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
    title: `${post.title} | Dachshund Blog`,
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
          {post.content.split('\n').map((paragraph, i) => (
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

