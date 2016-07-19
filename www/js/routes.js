angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.serviceOrder', {
    url: '/service',
    views: {
      'tab1': {
        templateUrl: 'templates/serviceOrder.html',
        controller: 'serviceOrderCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.serviceProviders'
      2) Using $state.go programatically:
        $state.go('tabsController.serviceProviders');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/serice-providers
      /page1/tab2/serice-providers
  */
  .state('tabsController.serviceProviders', {
    url: '/serice-providers',
    views: {
      'tab1': {
        templateUrl: 'templates/serviceProviders.html',
        controller: 'serviceProvidersCtrl'
      },
      'tab2': {
        templateUrl: 'templates/serviceProviders.html',
        controller: 'serviceProvidersCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/service')

  

});