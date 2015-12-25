angular.module('admin',['player','product','account','bar','foo'])

.config(function($stateProvider) {

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
     * Logs off the user
     */
    $scope.logoff = function() {
        $rootScope.account = null;
        $state.go('login');
    };

});