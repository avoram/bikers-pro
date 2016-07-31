var ServiceProvider = require('../models/service-providers-model');

module.exports.serviceProvidersList = function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  ServiceProvider.find({}, function(err, result) {
    res.json(result);
  });
};
