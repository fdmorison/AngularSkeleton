angular.module('login',[])

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('login', {
        url: "/login",
        templateUrl: 'pages/login/login.html',
        controller: 'loginController',
        controllerAs: 'c'
    });

})

.factory('Login', function($resource) {

    return $resource(
            "v1/accounts/:account/login",
            {account:'@account'}
    );

})

.controller('loginController', function($rootScope, $scope, $state, Login, UI) {

    $scope.login = {
            account: null,
            password: null
    }

    /**
     * Logs in the system
     */
    $scope.doLogin = function(isValid) {

        Login.save($scope.login)
        .$promise
        .then(function(account) {
            $rootScope.account = account;
            $state.go('admin');
        },
        function(response) {
            switch(response.status) {
                case 401: UI.showMessage("The password is wrong"); break;
                case 404: UI.showMessage("The account does not exist"); break;
            }
        })

    };

});