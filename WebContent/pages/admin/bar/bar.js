angular.module('bar', [])

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('admin.bar', {
        url: "/bar",
        templateUrl: 'pages/admin/bar/bar.html',
        controller: 'barController',
        controllerAs: 'c'
    });

})

.controller('barController', function($scope) {

	/**
     * Does something...
     */
    $scope.method1 = function() {

    };

});