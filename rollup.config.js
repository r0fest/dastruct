import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import terser from "@rollup/plugin-terser";
import eslint from '@rollup/plugin-eslint';
import typescript from '@rollup/plugin-typescript';
import pkg from "./package.json" assert { type: 'json' };

const extensions = ['.js', '.ts'];

export default  {
  input: `src/${ pkg.name }.ts`,
  output: [
    {
      file: `dist/${ pkg.name }.esm.js`,
      format: 'esm',
      exports: "named",
      sourcemap: true
    },
    {
      file: `dist/${ pkg.name }.esm.min.js`,
      format: 'esm',
      exports: "named",
      plugins: [terser()],
      sourcemap: true
    },
    {
      file: `dist/${ pkg.name }.cjs.js`,
      format: 'cjs',
      exports: "named",
      name: pkg.name,
      sourcemap: true
    },
    {
      file: `dist/${ pkg.name }.cjs.min.js`,
      format: 'cjs',
      exports: "named",
      name: pkg.name,
      plugins: [terser()],
      sourcemap: true
    },
  ],
  plugins: [
    resolve({ extensions }),
    eslint({ throwOnError: true, fix: true, extensions }),
    babel({ babelHelpers: 'bundled', include: ['src/**/*.ts'], extensions, exclude: './node_modules/**' }),
    typescript(),
  ],
}
