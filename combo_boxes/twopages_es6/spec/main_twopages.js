(function() {

  require.config({
    baseUrl: './twopages_es6/dist',
    paths: {
      'reducer_test': '../spec/reducer_test',
      'mocha': '../spec/mocha/mocha',
      'chai': '../spec/mocha/chai',
    },
    shim: {
      mocha: {
        init: function() {
          this.mocha.setup('bdd');
          return this.mocha;
        },
      }
    },
  });
  define(['mocha'], function(mocha) {
    require(['reducer_test'], function() {
      var runner = mocha.run();
    });
  });
})();