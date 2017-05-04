module.exports = {
  entry: './jsx/app.jsx', // Define the file to start bundling (typically your main file which loads other files)
  output: {
    path: __dirname + '/js/', // Define path for the bundled files
    filename: 'bundle.js' // Define filename for the bundled file which we will be using in
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader' // Specify loader which will perform JSX transformation (and ES6+ if you need them)
      }
    ]
  }
}