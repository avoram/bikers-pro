angular.module('app.controllers')
.controller('serviceProvidersCtrl', function($scope,$resource,$http) {
  var ServiceProvider = $resource('https://bikers-pro.herokuapp.com/api/serviceProvider',{q: '*'},{'query': { method: 'GET',isArray: true}});
  ServiceProvider.query(function(results){
    $scope.serviceProvidersList = results;
    console.log('Service Providers are ',$scope.serviceProvidersList);
  });
})
