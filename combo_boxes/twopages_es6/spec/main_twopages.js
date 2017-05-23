(function() {

  require.config({
    baseUrl: 'twopages_es6/spec',
    paths: {
      'reducer': '../dist/reducers/mainReducer',
      'twopages_test': 'twopages_test',
      'mocha': './mocha/mocha',
      'chai': './mocha/chai',
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
    require(['twopages_test'], function() {
      var runner = mocha.run();
    });
  });
})();