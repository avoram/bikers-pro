angular.module('app.directives', [])

.directive('appSideBar', [function() {
  return {
    restrict : 'AE',
    templateUrl: "/includes/side-bar.html"
  }
}]);
