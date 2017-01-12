var Serverless = require('../lib/Serverless');

var serverless = new Serverless();

(function() {
  serverless.init()
    .then(function() {
      serverless.utils.logStat(serverless, 'install')
    })
    .catch(function() {
      return Promise.resolve();
    });
})();
