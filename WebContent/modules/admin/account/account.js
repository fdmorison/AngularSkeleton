angular.module('account', [])

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('admin.account_creation', {
        url: "/account_creation",
        templateUrl: 'modules/admin/account/account_creation.html',
        controller: 'accountController',
        controllerAs: 'c'
    });

})

.factory('Account', function($resource) {

    return $resource("v1/accounts");

})

.controller('accountController', function($scope, Account) {

    $scope.account = {
            name: null,
            email: null,
            password: null,
            passcheck: null
    }
    
    /**
     * Create a new account.
     */
    $scope.createAccount = function() {

        $scope.account = Account.save($scope.account);

    };

});