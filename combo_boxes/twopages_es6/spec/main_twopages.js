(function() {

  require.config({
    baseUrl: './twopages_es6',
    paths: {
      'reducer': './dist/reducers/mainReducer',
      'actions': './dist/actions/actions',
      'twopages_test': './spec/twopages_test',
      'mocha': './spec/mocha/mocha',
      'chai': './spec/mocha/chai',
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