@echo off
REM Script de teste local do Dachshund Framework para Windows
REM Este script automatiza o processo de teste local

echo.
echo 🐕 Dachshund - Script de Teste Local
echo ==================================
echo.

REM Passo 1: Install dependencies
echo [1/5] Instalando dependencias do framework...
call npm install
if errorlevel 1 (
    echo ⚠️  Erro ao instalar dependencias
    exit /b 1
)
echo ✓ Dependencias instaladas
echo.

REM Passo 2: Build framework
echo [2/5] Fazendo build do framework...
call npm run build
if errorlevel 1 (
    echo ⚠️  Erro no build
    exit /b 1
)
echo ✓ Build concluido
echo.

REM Passo 3: Create npm link
echo [3/5] Criando link global do npm...
call npm link
if errorlevel 1 (
    echo ⚠️  Erro ao criar link
    exit /b 1
)
echo ✓ Link criado
echo.

REM Passo 4: Test CLI
echo [4/5] Testando comando CLI...
call dachshund --version
if errorlevel 1 (
    echo ⚠️  CLI nao esta disponivel globalmente
    exit /b 1
)
echo ✓ CLI funcionando
echo.

REM Passo 5: Instructions
echo [5/5] Proximos passos:
echo.
echo ✅ Framework pronto para teste!
echo.
echo Para criar um projeto de teste:
echo   npx create-dachshund meu-blog-teste
echo.
echo Dentro do projeto, linkar o Dachshund local:
echo   cd meu-blog-teste
echo   npm link @dachshund_framework/core
echo.
echo Iniciar desenvolvimento:
echo   npm run dev
echo.
echo Para mais detalhes, consulte: QUICK_START.md
echo.

