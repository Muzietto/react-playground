// inspired by babel-starter-kit
'use strict';

const fs = require('fs');
const del = require('del');
const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const pkg = require('../package.json');

let promise = Promise.resolve();

promise = promise.then(() => del(['dist/*']));

['es', 'cjs', 'umd'].forEach((format) => {
    // see async function example at https://rollupjs.org/guide/en#rollup-rollup
    promise = promise.then(() => rollup.rollup({
        entry: 'crosspromo_simulator/es6/index.js',
        external: Object.keys(pkg.dependencies),
        plugins: [babel(Object.assign(pkg.babel, {
            babelrc: false,
            exclude: 'node_modules/**',
            runtimeHelpers: true,
            presets: pkg.babel.presets.map(x => (x === 'latest' ? ['latest', {es2015: {modules: false}}] : x)),
        }))],
    }).then(bundle => bundle.write({
        dest: `dist/${format === 'iife' ? 'index' : `index.${format}`}.js`,
        format,
        sourceMap: true,
        moduleName: format === 'umd' ? 'CP' : undefined,
    })));
});

promise.catch(err => console.error(err.stack));
