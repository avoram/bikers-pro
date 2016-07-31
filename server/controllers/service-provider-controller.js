var ServiceProvider = require('../models/service-providers-model');

module.exports.serviceProvidersList = function(req, res) {
  ServiceProvider.find({}, function(err, result) {
    res.json(result);
  });
};
