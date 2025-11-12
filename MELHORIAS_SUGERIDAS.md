# 🔧 Melhorias Sugeridas para Dachshund Framework

## Roadmap de Melhorias para Uso Corporativo

---

## 🔴 PRIORIDADE CRÍTICA (Fazer Agora)

### 1. TypeScript Definitions Completas

**Problema Atual:**
```typescript
import Dachshund from '@dachshund_framework/core'; // Type 'any'
```

**Solução:**

Criar arquivo `dist/index.d.ts`:

```typescript
// dist/index.d.ts
declare module '@dachshund_framework/core' {
  import { ComponentType, ReactElement } from 'react';

  export interface DachshundConfig {
    baseUrl?: string;
    scrollToTop?: boolean;
  }

  export interface SEOMeta {
    title?: string;
    description?: string;
    keywords?: string | string[];
    image?: string;
    author?: string;
    robots?: string;
    canonical?: string | false;
    type?: string;
    twitterCard?: string;
    structuredData?: Record<string, any>;
    custom?: Record<string, string>;
  }

  export interface RouteProps {
    params: Record<string, string>;
    navigate: (path: string) => void;
    updateSEO: (meta: SEOMeta) => void;
  }

  export default class Dachshund {
    constructor(config?: DachshundConfig);
    
    route(
      path: string,
      component: ComponentType<RouteProps>,
      seoMeta?: SEOMeta
    ): this;
    
    navigate(path: string): void;
    init(rootId?: string): void;
    start(): void;
  }

  export function useSEO(meta: SEOMeta): void;
  export function useParams<T = Record<string, string>>(): T;
  export function useNavigate(): (path: string) => void;
}
```

**Como Implementar:**
```bash
# 1. Criar arquivo
touch dist/index.d.ts

# 2. Atualizar package.json
"types": "dist/index.d.ts"

# 3. Testar em projeto TS
npm link
cd ../test-project
npm link @dachshund_framework/core
```

**Impacto:** ⭐⭐⭐⭐⭐  
**Esforço:** 2 horas

---

### 2. Sistema de Guards/Middleware

**Problema Atual:**
```jsx
// Muito verboso
app.route('/', (props) => requireAuth(props, () => (
  <Layout>
    <Home />
  </Layout>
)));
```

**Solução:**

#### Adicionar ao `src/core/Dachshund.js`:

```javascript
class Dachshund {
  constructor(config = {}) {
    this.router = new Router();
    this.seo = new SEOManager();
    this.guards = []; // NOVO
    this.layouts = new Map(); // NOVO
    // ...
  }

  // NOVO: Registrar guard global
  guard(guardFn) {
    this.guards.push(guardFn);
    return this;
  }

  // NOVO: Registrar layout para pattern
  layout(pattern, LayoutComponent, options = {}) {
    this.layouts.set(pattern, { LayoutComponent, options });
    return this;
  }

  // MODIFICADO: route aceita guards
  route(path, Component, seoMeta = {}, options = {}) {
    const { guards = [] } = options;
    
    this.router.add(path, Component, seoMeta, {
      guards: [...this.guards, ...guards],
      ...options
    });
    
    return this;
  }

  // MODIFICADO: render aplica guards e layout
  async render() {
    const currentRoute = this.router.getCurrentRoute();
    if (!currentRoute) return;

    const { Component, guards = [], params } = currentRoute;

    // Executar guards
    for (const guard of guards) {
      const canActivate = await guard(currentRoute, this);
      if (!canActivate) {
        console.log('🐕 Guard blocked navigation');
        return;
      }
    }

    // Aplicar layout se houver
    let FinalComponent = Component;
    const layout = this.findLayout(currentRoute.path);
    if (layout) {
      const { LayoutComponent } = layout;
      FinalComponent = (props) => (
        React.createElement(LayoutComponent, props,
          React.createElement(Component, props)
        )
      );
    }

    // Renderizar...
    this.root.render(
      React.createElement(FinalComponent, {
        params,
        navigate: this.navigate.bind(this),
        updateSEO: this.seo.update.bind(this.seo)
      })
    );
  }

  findLayout(path) {
    for (const [pattern, layout] of this.layouts) {
      const regex = new RegExp(pattern.replace('*', '.*'));
      if (regex.test(path)) return layout;
    }
    return null;
  }
}
```

#### Uso:

```jsx
import Dachshund from '@dachshund_framework/core';

const app = new Dachshund();

// Guard de autenticação
const authGuard = async (route, app) => {
  const user = await checkAuth();
  if (!user) {
    app.navigate('/login');
    return false;
  }
  return true;
};

// Guard de admin
const adminGuard = async (route, app) => {
  const user = await getUser();
  if (user.role !== 'admin') {
    app.navigate('/forbidden');
    return false;
  }
  return true;
};

// Layout para rotas /app/*
app.layout('/app/*', AppLayout, { guards: [authGuard] });

// Rotas públicas
app.route('/', Home);
app.route('/login', Login);

// Rotas protegidas (usa layout + guards)
app.route('/app/dashboard', Dashboard);
app.route('/app/profile', Profile);

// Rota admin (guards adicionais)
app.route('/app/admin', AdminPanel, {}, {
  guards: [authGuard, adminGuard]
});

app.init();
```

**Impacto:** ⭐⭐⭐⭐⭐  
**Esforço:** 6 horas

---

### 3. Error Boundaries e 404 Handler

**Problema Atual:**
- Sem tratamento de erros global
- Sem página 404 customizável

**Solução:**

#### `src/core/Dachshund.js`:

```javascript
class Dachshund {
  constructor(config = {}) {
    // ...
    this.errorBoundary = null;
    this.notFoundComponent = null;
  }

  // NOVO: Definir error boundary
  onError(ErrorComponent) {
    this.errorBoundary = ErrorComponent;
    return this;
  }

  // NOVO: Definir 404
  notFound(NotFoundComponent) {
    this.notFoundComponent = NotFoundComponent;
    return this;
  }

  // MODIFICADO: render com error handling
  render() {
    try {
      const currentRoute = this.router.getCurrentRoute();
      
      if (!currentRoute) {
        // 404
        if (this.notFoundComponent) {
          this.root.render(
            React.createElement(this.notFoundComponent, {
              path: this.router.currentPath
            })
          );
        } else {
          console.warn('🐕 Route not found:', this.router.currentPath);
        }
        return;
      }

      // Wrap com ErrorBoundary se houver
      let element = React.createElement(Component, props);
      
      if (this.errorBoundary) {
        element = React.createElement(
          this.errorBoundary,
          {},
          element
        );
      }

      this.root.render(element);
    } catch (error) {
      console.error('🐕 Render error:', error);
      if (this.errorBoundary) {
        this.root.render(
          React.createElement(this.errorBoundary, { error })
        );
      }
    }
  }
}
```

#### Uso:

```jsx
// ErrorBoundary.jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-page">
          <h1>Algo deu errado 😕</h1>
          <p>{this.state.error.message}</p>
          <button onClick={() => window.location.reload()}>
            Recarregar
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// NotFound.jsx
function NotFound({ path }) {
  return (
    <div className="not-found">
      <h1>404 - Página não encontrada</h1>
      <p>Rota: {path}</p>
      <a href="/">Voltar para home</a>
    </div>
  );
}

// App.jsx
const app = new Dachshund();

app.onError(ErrorBoundary);
app.notFound(NotFound);

app.route('/', Home);
// ...
```

**Impacto:** ⭐⭐⭐⭐  
**Esforço:** 3 horas

---

## 🟡 PRIORIDADE ALTA (Próximas 2 Semanas)

### 4. Code Splitting Automático

**Objetivo:** Lazy load rotas automaticamente

#### `src/hooks/useLazyRoute.js`:

```javascript
import { lazy, Suspense } from 'react';

export function createLazyRoute(importFn, LoadingComponent = null) {
  const LazyComponent = lazy(importFn);
  
  return (props) => (
    <Suspense fallback={LoadingComponent ? <LoadingComponent /> : <div>Loading...</div>}>
      <LazyComponent {...props} />
    </Suspense>
  );
}
```

#### Uso:

```jsx
import { createLazyRoute } from '@dachshund_framework/core';

const Home = createLazyRoute(() => import('./pages/Home'));
const Blog = createLazyRoute(() => import('./pages/Blog'), LoadingSpinner);

app.route('/', Home);
app.route('/blog', Blog);
```

**Impacto:** ⭐⭐⭐⭐  
**Esforço:** 2 horas

---

### 5. Link Component com Prefetch

**Objetivo:** Component para navegação com prefetch opcional

#### `src/components/Link.jsx`:

```jsx
import React, { useCallback, useEffect, useRef } from 'react';
import { useNavigate } from '../hooks/useNavigate';

export function Link({ 
  to, 
  children, 
  prefetch = false,
  replace = false,
  className,
  activeClassName,
  ...props 
}) {
  const navigate = useNavigate();
  const linkRef = useRef(null);

  const isActive = () => {
    if (typeof window === 'undefined') return false;
    return window.location.pathname === to;
  };

  const handleClick = useCallback((e) => {
    e.preventDefault();
    if (replace) {
      window.history.replaceState({}, '', to);
    }
    navigate(to);
  }, [to, navigate, replace]);

  // Prefetch on hover
  useEffect(() => {
    if (!prefetch || !linkRef.current) return;

    const link = linkRef.current;
    let timeout;

    const handleMouseEnter = () => {
      timeout = setTimeout(() => {
        // Prefetch lógica (pode usar <link rel="prefetch">)
        const prefetchLink = document.createElement('link');
        prefetchLink.rel = 'prefetch';
        prefetchLink.href = to;
        document.head.appendChild(prefetchLink);
      }, 100);
    };

    const handleMouseLeave = () => {
      clearTimeout(timeout);
    };

    link.addEventListener('mouseenter', handleMouseEnter);
    link.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timeout);
      link.removeEventListener('mouseenter', handleMouseEnter);
      link.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [to, prefetch]);

  const finalClassName = [
    className,
    isActive() && activeClassName
  ].filter(Boolean).join(' ');

  return (
    <a
      ref={linkRef}
      href={to}
      onClick={handleClick}
      className={finalClassName}
      {...props}
    >
      {children}
    </a>
  );
}
```

#### Uso:

```jsx
import { Link } from '@dachshund_framework/core';

function Menu() {
  return (
    <nav>
      <Link to="/" activeClassName="active">Home</Link>
      <Link to="/blog" prefetch>Blog</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
```

**Impacto:** ⭐⭐⭐⭐  
**Esforço:** 3 horas

---

### 6. Plugin System

**Objetivo:** Permitir extensões modulares

#### `src/core/PluginManager.js`:

```javascript
class PluginManager {
  constructor(app) {
    this.app = app;
    this.plugins = [];
  }

  use(plugin, options = {}) {
    if (typeof plugin === 'function') {
      plugin(this.app, options);
    } else if (plugin.install) {
      plugin.install(this.app, options);
    }
    this.plugins.push({ plugin, options });
  }

  getPlugins() {
    return this.plugins;
  }
}

export default PluginManager;
```

#### `src/core/Dachshund.js`:

```javascript
import PluginManager from './PluginManager';

class Dachshund {
  constructor(config = {}) {
    // ...
    this.plugins = new PluginManager(this);
  }

  use(plugin, options) {
    this.plugins.use(plugin, options);
    return this;
  }
}
```

#### Criar plugins:

**Plugin de Analytics:**

```javascript
// plugins/analytics.js
export default {
  install(app, options = {}) {
    const { gtag } = options;

    // Injetar Google Analytics
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gtag}`;
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', gtag);
    }

    // Hook no navigate
    const originalNavigate = app.navigate.bind(app);
    app.navigate = (path) => {
      originalNavigate(path);
      
      // Track pageview
      if (window.gtag) {
        window.gtag('event', 'page_view', {
          page_path: path
        });
      }
    };
  }
};
```

**Plugin de Sentry:**

```javascript
// plugins/sentry.js
import * as Sentry from '@sentry/react';

export default {
  install(app, options = {}) {
    const { dsn, environment } = options;

    Sentry.init({
      dsn,
      environment,
      integrations: [
        new Sentry.BrowserTracing(),
        new Sentry.Replay()
      ],
      tracesSampleRate: 1.0,
    });

    // Hook errors
    const originalRender = app.render.bind(app);
    app.render = () => {
      try {
        originalRender();
      } catch (error) {
        Sentry.captureException(error);
        throw error;
      }
    };
  }
};
```

#### Uso:

```jsx
import Dachshund from '@dachshund_framework/core';
import analyticsPlugin from '@dachshund/analytics';
import sentryPlugin from '@dachshund/sentry';

const app = new Dachshund();

app.use(analyticsPlugin, { gtag: 'G-XXXXXXXXXX' });
app.use(sentryPlugin, { 
  dsn: 'https://xxx@sentry.io/xxx',
  environment: 'production'
});

// ...rotas
app.init();
```

**Impacto:** ⭐⭐⭐⭐⭐  
**Esforço:** 8 horas

---

## 🟢 PRIORIDADE MÉDIA (Próximo Mês)

### 7. CLI Aprimorado

**Objetivo:** Geração de código e scaffolding

#### `bin/dachshund-cli.js`:

```javascript
#!/usr/bin/env node
const { Command } = require('commander');
const fs = require('fs-extra');
const path = require('path');

const program = new Command();

program
  .name('dachshund')
  .description('Dachshund Framework CLI')
  .version('1.2.0');

// Criar novo projeto
program
  .command('create <name>')
  .option('-t, --template <template>', 'Template (blog, dashboard, landing)', 'blog')
  .action(async (name, options) => {
    console.log(`🐕 Creating ${name} with template ${options.template}...`);
    // Lógica de criar projeto
  });

// Adicionar página
program
  .command('add:page <name>')
  .option('-p, --path <path>', 'Route path')
  .action(async (name, options) => {
    const componentName = name.charAt(0).toUpperCase() + name.slice(1);
    const filePath = path.join('src', 'pages', `${componentName}.jsx`);

    const template = `
import React from 'react';
import { useSEO } from '@dachshund_framework/core';

export default function ${componentName}() {
  useSEO({
    title: '${componentName} | My Site',
    description: '${componentName} page'
  });

  return (
    <div>
      <h1>${componentName}</h1>
    </div>
  );
}
`;

    await fs.ensureDir(path.dirname(filePath));
    await fs.writeFile(filePath, template.trim());

    console.log(`✅ Created ${filePath}`);
    console.log(`\n📝 Add to App.jsx:`);
    console.log(`app.route('${options.path || `/${name}`}', ${componentName});`);
  });

// Adicionar guard
program
  .command('add:guard <name>')
  .action(async (name) => {
    const guardName = `${name}Guard`;
    const filePath = path.join('src', 'guards', `${guardName}.js`);

    const template = `
export async function ${guardName}(route, app) {
  // TODO: Implement guard logic
  
  // Return true to allow, false to block
  return true;
}
`;

    await fs.ensureDir(path.dirname(filePath));
    await fs.writeFile(filePath, template.trim());

    console.log(`✅ Created ${filePath}`);
  });

// Adicionar componente
program
  .command('add:component <name>')
  .option('-d, --dir <dir>', 'Directory', 'components')
  .action(async (name, options) => {
    const componentName = name.charAt(0).toUpperCase() + name.slice(1);
    const filePath = path.join('src', options.dir, `${componentName}.jsx`);

    const template = `
import React from 'react';

export default function ${componentName}(props) {
  return (
    <div className="${name}">
      {/* TODO: Implement component */}
    </div>
  );
}
`;

    await fs.ensureDir(path.dirname(filePath));
    await fs.writeFile(filePath, template.trim());

    console.log(`✅ Created ${filePath}`);
  });

program.parse();
```

#### Uso:

```bash
# Criar projeto
dachshund create my-app --template=dashboard

# Adicionar página
dachshund add:page about --path=/about

# Adicionar guard
dachshund add:guard auth

# Adicionar componente
dachshund add:component Button --dir=ui
```

**Impacto:** ⭐⭐⭐⭐  
**Esforço:** 10 horas

---

### 8. DevTools (Browser Extension)

**Objetivo:** Inspector para rotas, SEO e performance

Escopo grande, mas MVP seria:

#### Chrome Extension Manifest:

```json
{
  "manifest_version": 3,
  "name": "Dachshund DevTools",
  "version": "1.0.0",
  "devtools_page": "devtools.html",
  "permissions": ["storage"],
  "content_scripts": [{
    "matches": ["<all_urls>"],
    "js": ["content.js"]
  }]
}
```

**Features:**
- Ver todas as rotas registradas
- Inspecionar SEO meta tags
- Ver histórico de navegação
- Performance metrics
- Debug guards

**Impacto:** ⭐⭐⭐  
**Esforço:** 40 horas (projeto separado)

---

## 🔵 PRIORIDADE BAIXA (Backlog)

### 9. Image Optimization Helper

```jsx
// src/components/Image.jsx
import React, { useState, useEffect } from 'react';

export function Image({ 
  src, 
  alt, 
  width, 
  height, 
  lazy = true,
  placeholder = 'blur',
  className 
}) {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(!lazy);

  useEffect(() => {
    if (!lazy) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    });

    const img = document.querySelector(`[data-src="${src}"]`);
    if (img) observer.observe(img);

    return () => observer.disconnect();
  }, [src, lazy]);

  return (
    <div className={`dachshund-image ${className || ''}`} style={{ width, height }}>
      {inView && (
        <img
          src={src}
          alt={alt}
          loading={lazy ? 'lazy' : 'eager'}
          onLoad={() => setLoaded(true)}
          className={loaded ? 'loaded' : 'loading'}
        />
      )}
      {!loaded && placeholder === 'blur' && (
        <div className="placeholder" />
      )}
    </div>
  );
}
```

---

### 10. Meta Framework (Dachshund+)

**Conceito:** Layer adicional com opiniões fortes

```
@dachshund_framework/plus
├─ Auth (JWT, OAuth)
├─ API Client (axios wrapper)
├─ Forms (react-hook-form)
├─ i18n integrado
├─ Dark mode
├─ Layout system
└─ UI components (Tailwind)
```

Seria um "Next.js lite" usando Dachshund como base.

**Impacto:** ⭐⭐⭐⭐⭐  
**Esforço:** 200+ horas (projeto grande)

---

## 📦 Package Adicional: Helpers Corporativos

Criar `@dachshund_framework/corporate`:

```javascript
// @dachshund_framework/corporate

// Guards prontos
export { authGuard } from './guards/auth';
export { roleGuard } from './guards/role';
export { permissionGuard } from './guards/permission';

// Layouts prontos
export { DashboardLayout } from './layouts/Dashboard';
export { AuthLayout } from './layouts/Auth';

// Hooks corporativos
export { useAuth } from './hooks/useAuth';
export { usePermissions } from './hooks/usePermissions';
export { useAudit } from './hooks/useAudit';

// Plugins corporativos
export { auditPlugin } from './plugins/audit';
export { analyticsPlugin } from './plugins/analytics';
export { errorTrackingPlugin } from './plugins/errorTracking';
```

**Uso:**

```jsx
import Dachshund from '@dachshund_framework/core';
import { 
  authGuard, 
  roleGuard,
  DashboardLayout,
  analyticsPlugin 
} from '@dachshund_framework/corporate';

const app = new Dachshund();

app.use(analyticsPlugin, { gtag: 'G-XXX' });

app.layout('/app/*', DashboardLayout, {
  guards: [authGuard, roleGuard('user')]
});

app.route('/app/dashboard', Dashboard);
```

---

## 🎯 Roadmap Resumido

```
┌──────────────────────────────────────────────┐
│ SEMANA 1-2: TypeScript + Guards + 404       │
│ - TypeScript definitions                     │
│ - Sistema de guards/middleware               │
│ - Error boundaries e 404                     │
│ ✅ Impacto: CRÍTICO para adoção corporativa │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ SEMANA 3-4: Performance + Developer UX       │
│ - Code splitting automático                  │
│ - Link component com prefetch                │
│ - Plugin system                              │
│ ✅ Impacto: ALTO, melhora muito a experiência│
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ MÊS 2: Tooling + Ecosystem                   │
│ - CLI aprimorado                             │
│ - Package corporativo (@corporate)           │
│ - Documentação avançada                      │
│ ✅ Impacto: MÉDIO, facilita adoção           │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ MÊS 3+: Advanced Features                    │
│ - DevTools extension                         │
│ - Meta framework (Dachshund+)                │
│ - Image optimization                         │
│ ✅ Impacto: BAIXO, nice to have              │
└──────────────────────────────────────────────┘
```

---

## 🤝 Como Contribuir

### 1. **Para o Framework Core:**

```bash
# Fork do repo oficial
git clone https://github.com/lucodifier/dachshund.git
cd dachshund

# Criar branch
git checkout -b feature/guards-system

# Desenvolver
npm run dev

# Testar
npm run test:local

# PR
git push origin feature/guards-system
# Abrir PR no GitHub
```

### 2. **Para Packages Internos:**

```bash
# Criar monorepo interno
mkdir dachshund-corporate
cd dachshund-corporate

# Estrutura
packages/
├─ guards/
├─ layouts/
├─ plugins/
└─ cli-extensions/

# Publicar interno (npm privado ou Artifactory)
npm publish --registry=https://npm.company.com
```

### 3. **Para Documentação:**

```bash
# Fork docs
git clone https://github.com/lucodifier/dachshund-landing.git

# Adicionar guias corporativos
docs/
├─ guides/
│  ├─ enterprise-auth.md
│  ├─ rbac-patterns.md
│  └─ ci-cd-setup.md
```

---

## 📊 Métricas de Sucesso

Após implementar melhorias, medir:

```
Developer Experience:
├─ Onboarding time: < 4 horas (meta: 2 horas)
├─ Build time: < 10s (meta: 5s)
├─ Hot reload: < 200ms (meta: 100ms)
└─ Satisfação: > 8/10

Production:
├─ Lighthouse: > 95 (meta: 98)
├─ Bundle size: < 200kb (meta: 150kb)
├─ TTI: < 1.5s (meta: 1s)
└─ Bugs framework: < 1/mês

Adoption:
├─ Novos projetos: > 30%
├─ Documentação lida: > 80% do time
├─ PRs contribuídos: > 5
└─ ROI: > $5K economizados/ano
```

---

## ✅ Checklist de Implementação

### Antes de Começar
- [ ] Fazer fork do framework
- [ ] Setup ambiente de desenvolvimento
- [ ] Ler código-fonte completo
- [ ] Criar branch de desenvolvimento

### Fase 1 (Crítica)
- [ ] TypeScript definitions
- [ ] Sistema de guards
- [ ] Layout system
- [ ] Error boundaries
- [ ] 404 handler
- [ ] Testes unitários

### Fase 2 (Alta Prioridade)
- [ ] Code splitting
- [ ] Link component
- [ ] Prefetch
- [ ] Plugin system
- [ ] Analytics plugin
- [ ] Sentry plugin

### Fase 3 (Médio Prazo)
- [ ] CLI aprimorado
- [ ] Generators (page, component, guard)
- [ ] Package corporativo
- [ ] Documentação interna

### Fase 4 (Longo Prazo)
- [ ] DevTools extension
- [ ] Image optimization
- [ ] Meta framework (Dachshund+)

---

## 🎓 Recursos de Aprendizado

Para implementar essas melhorias, estude:

1. **TypeScript Definitions:**
   - https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html

2. **React Patterns:**
   - https://kentcdodds.com/blog/authentication-in-react-applications
   - https://reactpatterns.com

3. **Plugin Systems:**
   - Vue.js plugin system (inspiração)
   - Webpack plugin architecture

4. **Browser Extensions:**
   - https://developer.chrome.com/docs/extensions/mv3/getstarted/

5. **Frameworks Similares:**
   - Astro (SSG approach)
   - Remix (routing patterns)
   - Next.js (API design)

---

**Boa sorte com as melhorias! 🚀**

