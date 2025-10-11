# 🐕 Dashund Blog Template

Aplicação blog completa usando Dashund Framework + Tailwind CSS

## 🚀 Como usar

### Desenvolvimento

```bash
npm run dev
```

Abre o servidor de desenvolvimento em `http://localhost:5173`

### Build de Produção

```bash
npm run build
```

Gera os arquivos otimizados na pasta `dist/` com SEO completo.

### Preview

```bash
npm run preview
```

Visualiza o build de produção localmente.

## 📁 Estrutura

```
.
├── src/
│   ├── pages/          # Páginas da aplicação
│   ├── components/     # Componentes reutilizáveis
│   ├── data/          # Dados (posts, etc)
│   ├── App.jsx        # Configuração de rotas
│   └── index.js       # Entry point
├── public/            # Arquivos estáticos
├── dashund.config.js  # Configuração SEO
└── tailwind.config.js # Configuração Tailwind
```

## 🎨 Personalização

### Cores

Edite as cores em `tailwind.config.js`:

```js
colors: {
  primary: {
    500: '#667eea',
    // ...
  }
}
```

### SEO

Configure o SEO global em `dashund.config.js`

### Rotas

Adicione novas rotas em `src/App.jsx`

## 📚 Documentação

Visite [dashund.dev](https://dashund.dev) para documentação completa.

## 📄 Licença

MIT

