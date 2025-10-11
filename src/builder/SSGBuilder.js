import fs from 'fs-extra';
import path from 'path';

class SSGBuilder {
  constructor(config = {}) {
    this.config = {
      distDir: 'dist',
      publicDir: 'public',
      ...config
    };
  }

  async build(routes) {
    console.log('🐕 Dashund: Generating static HTML with SEO...');

    for (const [routePath, routeData] of Object.entries(routes)) {
      await this.generateHTML(routePath, routeData);
    }

    console.log('✅ Static generation complete!');
  }

  async generateHTML(routePath, routeData) {
    const { seo } = routeData;
    const htmlPath = this.getHTMLPath(routePath);
    
    // Ler template base
    const baseHTML = await fs.readFile(
      path.join(this.config.distDir, 'index.html'),
      'utf8'
    );

    // Injetar meta tags
    const htmlWithSEO = this.injectSEO(baseHTML, seo);

    // Salvar HTML
    await fs.ensureDir(path.dirname(htmlPath));
    await fs.writeFile(htmlPath, htmlWithSEO);
    
    console.log(`  ✓ ${routePath} → ${path.relative(process.cwd(), htmlPath)}`);
  }

  injectSEO(html, seo = {}) {
    const {
      title = 'Dashund App',
      description = '',
      keywords = '',
      image = '',
      author = '',
      robots = 'index, follow',
      structuredData = null
    } = seo;

    // Meta tags básicas
    let metaTags = `
  <title>${title}</title>
  <meta name="description" content="${description}">
  ${keywords ? `<meta name="keywords" content="${keywords}">` : ''}
  ${author ? `<meta name="author" content="${author}">` : ''}
  <meta name="robots" content="${robots}">
  
  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  ${image ? `<meta property="og:image" content="${image}">` : ''}
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  ${image ? `<meta name="twitter:image" content="${image}">` : ''}
`;

    // Structured Data (JSON-LD)
    if (structuredData) {
      metaTags += `
  <script type="application/ld+json">
${JSON.stringify(structuredData, null, 2)}
  </script>
`;
    }

    // Injetar no <head>
    return html.replace('</head>', `${metaTags}</head>`);
  }

  getHTMLPath(routePath) {
    let filePath = routePath === '/' 
      ? 'index.html'
      : `${routePath}/index.html`;
    
    // Remover / inicial se houver
    filePath = filePath.replace(/^\//, '');
    
    return path.join(this.config.distDir, filePath);
  }
}

export default SSGBuilder;

