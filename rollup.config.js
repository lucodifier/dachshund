import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.js',
  external: ['react', 'react-dom'],
  output: [
    {
      file: 'dist/dachshund.cjs.js',
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    },
    {
      file: 'dist/dachshund.esm.js',
      format: 'esm',
      sourcemap: true
    },
    {
      file: 'dist/dachshund.umd.js',
      format: 'umd',
      name: 'Dachshund',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM'
      },
      sourcemap: true
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react']
    }),
    production && terser()
  ]
};