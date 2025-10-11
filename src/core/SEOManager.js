class SEOManager {
  update(meta = {}) {
    if (meta.title) {
      this.setTitle(meta.title);
    }

    if (meta.description) {
      this.setMeta('description', meta.description);
    }

    if (meta.keywords) {
      this.setMeta('keywords', Array.isArray(meta.keywords) 
        ? meta.keywords.join(', ') 
        : meta.keywords
      );
    }

    this.setMeta('og:title', meta.title || document.title, 'property');
    this.setMeta('og:description', meta.description || '', 'property');
    this.setMeta('og:type', meta.type || 'website', 'property');
    this.setMeta('og:url', window.location.href, 'property');
    
    if (meta.image) {
      this.setMeta('og:image', meta.image, 'property');
    }

    this.setMeta('twitter:card', meta.twitterCard || 'summary_large_image');
    this.setMeta('twitter:title', meta.title || document.title);
    this.setMeta('twitter:description', meta.description || '');
    
    if (meta.image) {
      this.setMeta('twitter:image', meta.image);
    }

    if (meta.canonical !== false) {
      this.setCanonical(meta.canonical || window.location.href);
    }

    if (meta.structuredData) {
      this.setStructuredData(meta.structuredData);
    }

    if (meta.custom) {
      Object.entries(meta.custom).forEach(([name, content]) => {
        this.setMeta(name, content);
      });
    }
  }

  setTitle(title) {
    document.title = title;
  }

  setMeta(name, content, attribute = 'name') {
    if (!content) return;

    let tag = document.querySelector(`meta[${attribute}="${name}"]`);
    
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute(attribute, name);
      document.head.appendChild(tag);
    }
    
    tag.setAttribute('content', content);
  }

  setCanonical(url) {
    let link = document.querySelector('link[rel="canonical"]');
    
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    
    link.setAttribute('href', url);
  }

  setStructuredData(data) {
    let script = document.querySelector('script[type="application/ld+json"]');
    
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    
    script.textContent = JSON.stringify(data, null, 2);
  }
}

export default SEOManager;