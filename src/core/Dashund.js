import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import SEOManager from './SEOManager';

class Dashund {
  constructor(config = {}) {
    this.router = new Router();
    this.seo = new SEOManager();
    this.config = {
      baseUrl: '',
      scrollToTop: true,
      ...config
    };
    this.root = null;
    
    if (typeof window !== 'undefined') {
      window.__DASHUND__ = this;
    }
  }

  route(path, Component, seoMeta = {}) {
    this.router.add(path, Component, seoMeta);
    return this;
  }

  navigate(path) {
    if (this.config.scrollToTop) {
      window.scrollTo(0, 0);
    }
    
    this.router.navigate(path);
    this.render();
  }

  render() {
    const currentRoute = this.router.getCurrentRoute();
    if (!currentRoute) {
      console.warn('🐕 Dashund: Route not found');
      return;
    }

    const { Component, seoMeta, params } = currentRoute;
    this.seo.update(seoMeta);

    const container = document.getElementById('root');
    if (!container) {
      console.error('🐕 Dashund: #root container not found');
      return;
    }

    if (!this.root) {
      this.root = ReactDOM.createRoot(container);
    }

    this.root.render(
      React.createElement(Component, {
        params,
        navigate: this.navigate.bind(this),
        updateSEO: this.seo.update.bind(this.seo)
      })
    );
  }

  start() {
    window.addEventListener('popstate', () => {
      this.router.setPath(window.location.pathname);
      this.render();
    });

    document.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (link && this.shouldInterceptLink(link)) {
        e.preventDefault();
        const path = new URL(link.href).pathname;
        this.navigate(path);
      }
    });

    this.router.setPath(window.location.pathname);
    this.render();

    console.log('🐕 Dashund started!');
  }

  // Alias para start() - compatibilidade
  init(rootId = 'root') {
    this.start();
  }

  shouldInterceptLink(link) {
    return (
      link.href &&
      link.href.startsWith(window.location.origin) &&
      link.target !== '_blank' &&
      !link.hasAttribute('download')
    );
  }
}

export default Dashund;