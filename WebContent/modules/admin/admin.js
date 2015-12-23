angular.module('admin',['ui.router','player','product','account','bar','foo'])

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('admin', {
        url: "/admin",
        templateUrl: 'modules/admin/admin.html',
        controller: 'adminController',
        controllerAs: 'c'
    });

})

.controller('adminController', function($scope) {

    /**
     * Does something...
     */
    $scope.method1 = function() {

    };

    /**
     * Does something and return 0.
     * @returns zero
     */
    $scope.method2 = function() {
      return 0;
    };

});