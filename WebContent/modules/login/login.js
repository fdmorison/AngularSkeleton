angular.module('login',[])

.config(function($stateProvider, $urlRouterProvider) {

    // Now set up the states
    $stateProvider
    .state('login', {
        url: "/login",
        templateUrl: 'modules/login/login.html',
        controller: 'loginController',
        controllerAs: 'c'
    });

})

.controller('loginController', function($scope, $state) {

    console.log("start: loginController")

    /**
     * Logs in the system
     */
    $scope.doLogin = function() {
        $state.go('admin');
    };

});