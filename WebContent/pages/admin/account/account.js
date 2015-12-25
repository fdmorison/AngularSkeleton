angular.module('account', [])

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('admin.account_creation', {
        url: "/account_creation",
        templateUrl: 'pages/admin/account/account_creation.html',
        controller: 'accountController',
        controllerAs: 'c'
    });

})

.factory('Account', function($resource) {

    return $resource("v1/accounts");

})

.controller('accountController', function($scope, Account, UI) {

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

        Account.save($scope.account)
        .$promise
        .then(function(account) {
            $scope.account = account;
            UI.showSuccess("Account '"+account.name+"' was created");
        },
        function(response) {
            switch(response.status) {
                case 409: UI.showWarn("Account '"+$scope.account.name+"' already exists");
                          break;
            }
        })

    };

});