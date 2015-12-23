angular.module('login',[])

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('login', {
        url: "/login",
        templateUrl: 'modules/login/login.html',
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

.controller('loginController', function($rootScope, $scope, $state, Login) {

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
            var messageArea = $("#alert");
            switch(response.status) {
                case 401: messageArea.text("The password is wrong"); break;
                case 404: messageArea.text("The account does not exist"); break;
            }
            messageArea.show();
        })

    };

});