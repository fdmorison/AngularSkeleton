angular.module('login',[])

.run(function($rootScope) {
    
    if (!sessionStorage.lastAdminState) {
        localStorage.lastAdminState = 'admin'
    }

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
        if ( toState.name.startsWith('admin.') ) {
            localStorage.lastAdminState = toState.name;
        }
    });

})

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('login', {
        url: "/login",
        templateUrl: 'modules/pages/login/login.html',
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
            $state.go(localStorage.lastAdminState);
        },
        function(response) {
            switch(response.status) {
                case UNAUTHORIZED: UI.showWarn("The password is wrong"); break;
                case NOT_FOUND   : UI.showWarn("The account does not exist"); break;
            }
        })

    };

});