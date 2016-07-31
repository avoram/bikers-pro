var mongoose = require('mongoose');

//Here model has 3 arguments : 3rd argument is the name of the collection (serviceProviders)
//http://stackoverflow.com/questions/14183611/mongoose-always-returning-an-empty-array-nodejs

module.exports = mongoose.model("Model", {
  name: String
}, "serviceProvidersList"); //Last Argument is name of collection
