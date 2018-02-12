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
    promise = promise.then(() => rollup.rollup({
        entry: 'volume_decoupled_redux_es6_BUNDLED/jsx/app.jsx',
        external: Object.keys(pkg.dependencies),
        plugins: [babel(Object.assign(pkg.babel, {
            babelrc: false,
            exclude: 'node_modules/**',
            runtimeHelpers: true,
            presets: pkg.babel.presets.map(x => (x === 'latest' ? ['latest', {es2015: {modules: false}}] : x)),
        }))],
    }).then(bundle => bundle.write({
        dest: `dist/${format === 'cjs' ? 'index' : `index.${format}`}.js`,
        format,
        sourceMap: true,
        moduleName: format === 'umd' ? pkg.name : undefined,
    })));
});

promise.catch(err => console.error(err.stack));
