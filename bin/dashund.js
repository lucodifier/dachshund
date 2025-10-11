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
      console.log(chalk.cyan('\n📦 Installing dependencies...\n'));
      
      // Install dependencies
      execSync('npm install', { 
        cwd: projectPath, 
        stdio: 'inherit' 
      });
      
      console.log(chalk.green('\n✅ Project created successfully!\n'));
      console.log(chalk.blue('🚀 Next steps:\n'));
      console.log(chalk.white(`   cd ${projectName}`));
      console.log(chalk.white(`   npm run dev`));
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
  .action((options) => {
    console.log(chalk.blue('🐕 Dashund is building your site...'));
    console.log(chalk.green('✅ Build complete!'));
  });

program.parse();