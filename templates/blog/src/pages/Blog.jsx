import React from 'react';
import { useSEO } from '@dachshund_framework/core';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { posts } from '../data/posts';

export default function Blog({ navigate }) {
  useSEO({
    title: 'Blog - Últimos Artigos | Dachshund',
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
                    onClick={() => navigate(`/blog/${post.id}`)}
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

