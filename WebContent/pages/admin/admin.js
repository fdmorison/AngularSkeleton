angular.module('admin',['ui.router','player','product','account','bar','foo'])

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('admin', {
        url: "/admin",
        templateUrl: 'pages/admin/admin.html',
        controller: 'adminController',
        controllerAs: 'c'
    });

})

.controller('adminController', function($rootScope, $scope, $state) {

    if (!$rootScope.account) {
        $state.go('login');
    }

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