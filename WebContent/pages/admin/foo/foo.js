angular.module('foo', [])

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('admin.foo', {
        url: "/foo",
        templateUrl: 'pages/admin/foo/foo.html',
        controller: 'fooController',
        controllerAs: 'c'
    });

})

.controller('fooController', function($scope) {

	/**
     * Does something...
     */
    $scope.method1 = function() {

    };

});