var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  serviceProvidersController = require('./server/controllers/service-provider-controller');

mongoose.connect('mongodb://localhost:27017/bikers-pro');

//Using Middleware of Express
app.use(bodyParser());

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/www/index.html');
});

//Using static middleware
app.use('/js', express.static(__dirname + '/www/js'));
app.use('/lib', express.static(__dirname + '/www/lib'));
app.use('/templates', express.static(__dirname + '/www/templates'));
app.use('/img', express.static(__dirname + '/www/img'));
app.use('/scss', express.static(__dirname + '/scss'));

//Rest API implementation
// app.get('/api/meetups', meetupsController.list);
// app.post('/api/meetups', meetupsController.create);
// app.post('/api/saveUserJourneyPath', locationStorageController.create);
app.get('/api/serviceProvider', serviceProvidersController.serviceProvidersList);

app.listen(3000, function() {
  console.log('I am listing at port 3000');
});
