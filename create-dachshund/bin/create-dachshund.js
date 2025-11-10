#!/usr/bin/env node

const { spawn } = require('child_process');

// Pega os argumentos passados (tudo depois de 'create-dachshund')
const args = process.argv.slice(2);

// Adiciona o comando 'create' se não foi passado
if (args.length === 0 || !args[0].startsWith('-')) {
  // Se o primeiro argumento não é uma flag, assume que é 'create <nome>'
  args.unshift('create');
}

// Usa npx para executar o @dachshund_framework/core
// Isso garante que sempre pega a versão mais recente
const child = spawn(
  'npx',
  ['-y', '@dachshund_framework/core', ...args],
  {
    stdio: 'inherit',
    shell: true
  }
);

child.on('exit', (code) => {
  process.exit(code || 0);
});

