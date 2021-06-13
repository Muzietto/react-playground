# React Playground - from-zero-to-vertical

## 02-useEffect

## Usage

- npm install

## Available tasks

- `npm run start-mocks`: starts mock server on port 3003
- `npm start`: will launch the app in hot reloading with webpack-dev-server
- `npm run watch`: alternative to `npm start`, will watch for code changes and will build the app inside `/dist` folder. Useful if you want to serve it with your own web server.
- `npm run build`: will create the build inside `/dist` folder.

## Activities

- explore mock server and its datasources; start the server (how?)

- explore http client inside model dir tree; add endpoint userProfiles to client.js

- useState: create state variable userProfiles in VerticalHRPage

- useEffect: invoke endpoint /user_profiles/:userId from VerticalHRPage; add the retrieved JSON to the verticalHrPageBody for debugging purposes

- send userProfiles.profiles to Header as prop; create icons accordingly. You will need to implement a mapping inside endpoint /user_profiles/:userId in order to enrich the JSON data
