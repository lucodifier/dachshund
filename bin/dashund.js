#!/usr/bin/env node

const { Command } = require('commander');
const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

const program = new Command();

program
  .name('dashund')
  .description('🐕 Dashund Framework CLI')
  .version('1.0.0');

// Create new project command
program
  .command('create <project-name>')
  .description('Create a new Dashund project')
  .option('-t, --template <template>', 'Template to use (blog, basic)', 'blog')
  .action((projectName, options) => {
    const projectPath = path.join(process.cwd(), projectName);
    
    console.log(chalk.blue(`\n🐕 Creating Dashund project: ${projectName}...\n`));
    
    // Check if directory exists
    if (fs.existsSync(projectPath)) {
      console.log(chalk.red(`❌ Directory ${projectName} already exists!`));
      process.exit(1);
    }
    
    try {
      // Create project directory
      fs.mkdirSync(projectPath, { recursive: true });
      
      // Copy template
      const templatePath = path.join(__dirname, '..', 'templates', options.template);
      
      if (!fs.existsSync(templatePath)) {
        console.log(chalk.red(`❌ Template '${options.template}' not found!`));
        console.log(chalk.yellow(`Available templates: blog, basic`));
        process.exit(1);
      }
      
      console.log(chalk.cyan('📦 Copying template files...'));
      fs.copySync(templatePath, projectPath);
      
      // Update package.json with project name
      const packageJsonPath = path.join(projectPath, 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      packageJson.name = projectName;
      fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
      
      console.log(chalk.green('✅ Template copied!'));
      
      console.log(chalk.green('\n✅ Project created successfully!\n'));
      console.log(chalk.blue('🚀 Next steps:\n'));
      console.log(chalk.white(`   cd ${projectName}`));
      console.log(chalk.cyan('\n📦 Install dependencies:'));
      console.log(chalk.white(`   npm install`));
      console.log(chalk.cyan('\n🔗 For local development (testing framework locally):'));
      console.log(chalk.white(`   npm link @dashund/core`));
      console.log(chalk.cyan('\n🚀 Start development:'));
      console.log(chalk.white(`   npm run dev`));
      console.log(chalk.cyan('\n📦 Build for production:'));
      console.log(chalk.white(`   npm run build\n`));
      
    } catch (error) {
      console.log(chalk.red(`\n❌ Error creating project: ${error.message}`));
      process.exit(1);
    }
  });

program
  .command('build')
  .description('Build static site with SEO')
  .option('-c, --config <file>', 'Config file', 'dashund.config.js')
  .option('-o, --output <dir>', 'Output directory', 'dist')
  .action(async (options) => {
    try {
      console.log(chalk.blue('\n🐕 Dashund: Generating static HTML with SEO...\n'));
      
      const configPath = path.join(process.cwd(), options.config);
      
      if (!fs.existsSync(configPath)) {
        console.log(chalk.yellow(`⚠️  Config file not found: ${options.config}`));
        console.log(chalk.yellow(`   Skipping SEO generation.`));
        return;
      }
      
      // Usar import dinâmico para suportar ES modules
      const { default: config } = await import('file://' + configPath);
      const distDir = options.output;
      
      // Verificar se dist existe
      if (!fs.existsSync(distDir)) {
        console.log(chalk.red(`❌ Output directory not found: ${distDir}`));
        console.log(chalk.yellow(`   Run 'npm run build' first to generate Vite build.`));
        process.exit(1);
      }
      
      // Gerar HTML para cada rota
      const routes = config.routes || {};
      let count = 0;
      
      for (const [routePath, routeConfig] of Object.entries(routes)) {
        await generateRouteHTML(routePath, routeConfig, distDir);
        count++;
      }
      
      console.log(chalk.green(`\n✅ Generated ${count} HTML files with SEO!\n`));
      
    } catch (error) {
      console.log(chalk.red(`\n❌ Build error: ${error.message}\n`));
      process.exit(1);
    }
  });

async function generateRouteHTML(routePath, routeConfig, distDir) {
  const seo = routeConfig.seo || {};
  
  // Ler template base
  const baseHTMLPath = path.join(distDir, 'index.html');
  let html = fs.readFileSync(baseHTMLPath, 'utf8');
  
  // Injetar SEO
  html = injectSEOTags(html, seo);
  
  // Determinar caminho do arquivo
  let outputPath;
  if (routePath === '/') {
    outputPath = path.join(distDir, 'index.html');
  } else {
    const cleanPath = routePath.replace(/^\//, '').replace(/\/$/, '');
    outputPath = path.join(distDir, cleanPath, 'index.html');
  }
  
  // Criar diretório se necessário
  fs.ensureDirSync(path.dirname(outputPath));
  
  // Salvar HTML
  fs.writeFileSync(outputPath, html);
  
  console.log(chalk.cyan(`  ✓ ${routePath.padEnd(20)} → ${path.relative(process.cwd(), outputPath)}`));
}

function injectSEOTags(html, seo) {
  const {
    title = 'Dashund App',
    description = '',
    keywords = '',
    image = '',
    author = '',
    robots = 'index, follow',
    structuredData = null
  } = seo;

  // Substituir título
  html = html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);

  // Meta tags
  let metaTags = `
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
  ${image ? `<meta name="twitter:image" content="${image}">` : ''}`;

  // Structured Data
  if (structuredData) {
    metaTags += `
  
  <script type="application/ld+json">
${JSON.stringify(structuredData, null, 2)}
  </script>`;
  }

  // Injetar antes de </head>
  return html.replace('</head>', `${metaTags}\n</head>`);
}

program.parse();