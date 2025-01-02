import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts', // Entry point of the package
  output: [
    {
      file: 'dist/index.cjs.js',  // CommonJS output for Node.js
      format: 'cjs',              // CommonJS format
      sourcemap: true,            // Generate source maps for debugging
    },
    {
      file: 'dist/index.esm.js',  // ES module output for modern JavaScript
      format: 'esm',              // ES Module format
      sourcemap: true,            // Generate source maps for debugging
    },
  ],
  plugins: [
    resolve(),                   // Resolves modules from node_modules
    commonjs(),                  // Converts CommonJS modules to ES6
    typescript({ tsconfig: './tsconfig.json' }),  // Compiles TypeScript files
  ],
};
