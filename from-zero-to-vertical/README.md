# React Playground - from-zero-to-vertical

## 04-dictionary-provider

## Usage

- npm install

## Available tasks

- `npm run start-mocks`: starts mock server on port 3003
- `npm start`: will launch the app in hot reloading with webpack-dev-server
- `npm run watch`: alternative to `npm start`, will watch for code changes and will build the app inside `/dist` folder. Useful if you want to serve it with your own web server.
- `npm run build`: will create the build inside `/dist` folder.

## Activities

- make sure to have at least two vertical pages; better yet, implement a third one

- complete implementation of the dictionary model

- implement mock endpoint /dictionary/:locale inside generalData.js

- implement method dictionary(locale) in client.js and invoke it inside index.js

- create a Dictionary wrapper component that provides the translation method _t(I18N_KEY) and use it inside some component
