#!/bin/bash

# Script de teste local do Dashund Framework
# Este script automatiza o processo de teste local

echo "🐕 Dashund - Script de Teste Local"
echo "=================================="
echo ""

# Cores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Passo 1: Install dependencies
echo -e "${BLUE}[1/5] Instalando dependências do framework...${NC}"
npm install
if [ $? -ne 0 ]; then
    echo -e "${YELLOW}⚠️  Erro ao instalar dependências${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Dependências instaladas${NC}"
echo ""

# Passo 2: Build framework
echo -e "${BLUE}[2/5] Fazendo build do framework...${NC}"
npm run build
if [ $? -ne 0 ]; then
    echo -e "${YELLOW}⚠️  Erro no build${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Build concluído${NC}"
echo ""

# Passo 3: Create npm link
echo -e "${BLUE}[3/5] Criando link global do npm...${NC}"
npm link
if [ $? -ne 0 ]; then
    echo -e "${YELLOW}⚠️  Erro ao criar link${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Link criado${NC}"
echo ""

# Passo 4: Test CLI
echo -e "${BLUE}[4/5] Testando comando CLI...${NC}"
dashund --version
if [ $? -ne 0 ]; then
    echo -e "${YELLOW}⚠️  CLI não está disponível globalmente${NC}"
    exit 1
fi
echo -e "${GREEN}✓ CLI funcionando${NC}"
echo ""

# Passo 5: Instructions
echo -e "${BLUE}[5/5] Próximos passos:${NC}"
echo ""
echo -e "${GREEN}✅ Framework pronto para teste!${NC}"
echo ""
echo "Para criar um projeto de teste:"
echo -e "${YELLOW}  dashund create meu-blog-teste${NC}"
echo ""
echo "Dentro do projeto, linkar o Dashund local:"
echo -e "${YELLOW}  cd meu-blog-teste${NC}"
echo -e "${YELLOW}  npm link @dashund/core${NC}"
echo ""
echo "Iniciar desenvolvimento:"
echo -e "${YELLOW}  npm run dev${NC}"
echo ""
echo "Para mais detalhes, consulte: ${BLUE}QUICK_START.md${NC}"
echo ""

