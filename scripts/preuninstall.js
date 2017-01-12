const Serverless = require('../lib/Serverless');

const serverless = new Serverless();

(function() {
  serverless.init()
    .then(function() {
      serverless.utils.logStat(serverless, 'uninstall')
    })
    .catch(function() {
      return Promise.resolve();
    });
})();
