# Simplest sample transpile ES6 to ES5 ever

Taken and adapted from [dotnetcurry](http://www.dotnetcurry.com/javascript/1293/transpile-es6-modules-es5-using-babel).

To run this sample open a command prompt and move to the folder containing this code. Run the following commands:

 - npm install
 - npm run transpile-amd
 - [http-server](https://www.npmjs.com/package/http-server) .

Open a browser and get index.html from localhost at the right port.

[There is no way to let babel transpile into a single file](http://stackoverflow.com/questions/33963999/using-babel-with-a-single-output-file-and-es6-modules), because there will be no entry point to the main module. You need Browserify or Webpack for that.

Original code to be found [here](https://github.com/dotnetcurry/Transpiling-ES6-Modules).