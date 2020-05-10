import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify-es'
import json from '@rollup/plugin-json'
import builtins from 'rollup-plugin-node-builtins'
import globals from 'rollup-plugin-node-globals'

export default {
  input: 'src/index.js',
  plugins: [
    globals(),
    builtins(),
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs(),
    json(),
    uglify()
  ],
  output: {
    extend: true,
    compact: true,
    file: 'dist/index.min.js',
    format: 'iife',
    name: 'writteli_lib',
    sourcemap: 'dist/index.js.map'
  },
};
