# 🐕 Dachshund Framework - Cheat Sheet

**Referência Rápida para Apresentações e Decisões**

---

## 🎯 Elevator Pitch (30 segundos)

> "Dachshund é um framework React **16x menor que Next.js**, com **SEO perfeito** e **zero servidor**.  
> Ideal para landing pages, dashboards internos e MVPs.  
> **$8.4K economizados/ano** (5 apps). Deploy em qualquer CDN grátis."

---

## ✅ Quando Usar

```
✅ Landing pages e marketing
✅ Blogs corporativos
✅ Dashboards internos
✅ MVPs e protótipos
✅ SPAs < 50 rotas
✅ Sites institucionais
```

## ❌ Quando NÃO Usar

```
❌ E-commerce complexo (>100 produtos)
❌ Aplicações multi-tenant
❌ Sistemas enterprise (>100 rotas)
❌ Necessidade de SSR obrigatório
❌ API Routes integradas necessárias
```

---

## 📊 Comparação Rápida

| Métrica | Dachshund | Next.js |
|---------|-----------|---------|
| Bundle Size | **5kb** | 80kb |
| Build Time | **8s** | 40s |
| Hospedagem | **$0** | $20+ |
| Onboarding | **1 dia** | 1 semana |
| Setup | **5 min** | 30 min |
| Deploy | **CDN** | Node.js |
| Lighthouse | **98** | 95 |

---

## 💰 ROI (5 Apps/Ano)

```
Hospedagem:        $1.200/ano
Tempo de dev:      $7.200/ano
─────────────────────────────
TOTAL:             $8.400/ano
```

---

## 🚀 Caso Real: Valhalla

```
✅ 2 semanas de dev (1 pessoa)
✅ 6 rotas + autenticação
✅ Build: 8s | Bundle: 145kb
✅ Lighthouse: 98/100
✅ Deploy: Grátis (Cloudflare)
✅ Bugs: 0 | Satisfação: 9/10
```

---

## ⚡ Quick Start

```bash
# Criar projeto
npx create-dachshund my-app
cd my-app
npm install
npm run dev

# Build
npm run build

# Deploy
# Apenas upload da pasta dist/ para qualquer CDN
```

---

## 📝 Código Mínimo

```jsx
import Dachshund from '@dachshund_framework/core';
import Home from './pages/Home';

const app = new Dachshund({
  baseUrl: 'https://meusite.com',
  scrollToTop: true
});

app.route('/', Home, {
  title: 'Home - Meu Site',
  description: 'Site com SEO perfeito'
});

app.init('root');
```

---

## 🎨 Features Principais

```
✅ Roteamento (/blog/:id)
✅ SEO automático (meta tags, OG, JSON-LD)
✅ SPA navigation
✅ SSG (Static Site Generation)
✅ Hooks (useSEO, useParams, useNavigate)
✅ Vite integration
✅ Deploy em CDN
```

---

## ⚠️ Limitações

```
❌ API Routes (usar backend separado)
❌ Middleware nativo (guards manuais)
❌ Image optimization (manual ou lib)
❌ ISR (rebuild completo)
❌ Ecossistema pequeno
```

---

## 🔄 Migration Path

```
1. Não migrar projetos existentes
2. Usar em projetos NOVOS adequados
3. Manter Next.js para casos complexos
4. Avaliar a cada 2 meses

Regra: Ferramenta certa para trabalho certo
```

---

## 📈 Métricas de Sucesso (POC)

```
Após 2 meses:
├─ Bugs: < 3
├─ Lighthouse: > 95
├─ Satisfação: > 8/10
├─ ROI parcial: > $2K
└─ Projetos: 2+
```

---

## 🎤 FAQs Rápidos

**Q: É seguro sem SSR?**  
A: Sim. Secrets vão no backend (API separada).

**Q: Google indexa SPA?**  
A: Sim! Desde 2015. O HTML é pré-renderizado.

**Q: E se precisar de feature X?**  
A: Volta para Next.js. Sem lock-in.

**Q: Time vai resistir?**  
A: É MAIS simples que Next.js. 1 dia de onboarding.

**Q: Qual o risco?**  
A: Baixo. MIT license, código pequeno (500 linhas).

---

## 🗺️ Decision Tree

```
Novo Projeto?
  ├─ Precisa SEO?
  │   ├─ SIM → Precisa SSR?
  │   │   ├─ SIM → Next.js
  │   │   └─ NÃO → < 50 rotas?
  │   │       ├─ SIM → Dachshund
  │   │       └─ NÃO → Next.js
  │   └─ NÃO → Create React App
  └─ ...
```

---

## 📋 Checklist de Apresentação

```
Preparação:
□ Demo funcionando
□ Slides prontos
□ Números atualizados
□ FAQs revisados

Durante:
□ Mostrar código real
□ Ser honesto sobre limitações
□ Demo ao vivo (não vídeo)
□ Deixar tempo para perguntas

Após:
□ Distribuir documentação
□ Coletar feedback
□ Definir próximos passos
```

---

## 🎯 Recomendação Final

```
✅ APROVAR POC (2 meses, 2 devs, 2 projetos)

Motivos:
├─ Custo: $0
├─ Risco: Baixo
├─ ROI: Alto ($8K+/ano)
└─ Upside: Simplicidade + Economia

Não fazer:
├─ Migrar projetos existentes
├─ Substituir Next.js completamente
└─ Obrigar adoção
```

---

## 📞 Links Úteis

- **Docs:** https://lucodifier.github.io/dachshund-landing/
- **GitHub:** https://github.com/lucodifier/dachshund
- **NPM:** @dachshund_framework/core
- **Valhalla (POC):** [seu-link]

---

## 💡 Frases de Impacto

> "Não use um trator para ir ao supermercado."

> "Next.js é incrível, mas nem tudo precisa ser tão complexo."

> "70% dos projetos não precisam de SSR."

> "Simplicidade é feature, não bug."

> "$8.4K economizados/ano não é pouco."

---

## 🏆 Key Takeaways

```
1. Dachshund é complementar, não substituto
2. Use para casos adequados (70% dos projetos)
3. ROI comprovado ($8.4K/ano)
4. POC validado (Valhalla: 9/10)
5. Adoção progressiva (sem risco)
6. Ferramenta certa para trabalho certo
```

---

## 🚦 Sinais de Que Dachshund é Ideal

```
✅ "Esse projeto é simples demais para Next.js"
✅ "Por que a hospedagem é tão cara?"
✅ "Build está muito lento para 5 páginas"
✅ "Junior levou 1 semana para entender o setup"
✅ "É só uma landing page com SEO"
✅ "Dashboard interno não precisa de SEO"
```

---

## 🔴 Sinais de Que Next.js é Melhor

```
❌ "Precisamos de ISR para catálogo"
❌ "Temos 500+ rotas dinâmicas"
❌ "SSR é requisito de compliance"
❌ "Precisamos de API Routes integradas"
❌ "Aplicação multi-tenant complexa"
❌ "Time já domina Next.js profundamente"
```

---

## 📊 Tabela de Decisão Rápida

| Critério | Dachshund | Next.js |
|----------|-----------|---------|
| Custo | ⭐⭐⭐⭐⭐ | ⭐⭐ |
| Simplicidade | ⭐⭐⭐⭐⭐ | ⭐⭐ |
| Performance | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Features | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Ecossistema | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| Maturidade | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

---

## 🎯 Próximos Passos (Se Aprovado)

```
Semana 1:
├─ Formar squad (2 devs voluntários)
├─ Definir projetos piloto
└─ Setup ambiente

Semana 2-8:
├─ Desenvolver projetos
├─ Coletar métricas semanais
└─ Ajustar se necessário

Semana 9:
├─ Apresentar resultados
└─ Decidir: escalar ou não
```

---

## 📱 One-Liner por Audiência

**Para Gestores:**  
> "Economiza $8K/ano com mesma qualidade."

**Para Developers:**  
> "Next.js sem a complexidade. Só React + SEO."

**Para Product:**  
> "Deploy em 5 minutos. Iteração mais rápida."

**Para Finance:**  
> "Custo zero de hospedagem. ROI imediato."

---

**Imprima este cheat sheet e tenha sempre à mão! 📄✨**

---

## 🎨 Visual Summary

```
┌─────────────────────────────────────────┐
│         DACHSHUND FRAMEWORK             │
│                                         │
│  🐕 5kb | ⚡ 8s build | 💰 $0 host    │
│                                         │
│  IDEAL PARA:                            │
│  ✅ Landing pages                       │
│  ✅ Blogs                               │
│  ✅ Dashboards internos                 │
│  ✅ MVPs                                │
│                                         │
│  NÃO USAR PARA:                         │
│  ❌ E-commerce complexo                 │
│  ❌ Multi-tenant                        │
│  ❌ Enterprise (>100 rotas)            │
│                                         │
│  ROI: $8.4K/ano (5 apps)               │
│  POC: Valhalla (9/10)                   │
│  RECOMENDAÇÃO: ✅ APROVAR POC          │
└─────────────────────────────────────────┘
```

---

**Versão: 1.0 | Novembro 2025**

