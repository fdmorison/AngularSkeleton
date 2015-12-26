angular.module('admin',['player','product','account','bar','foo'])

.config(function($stateProvider) {

    $stateProvider
    .state('admin', {
        url: "/admin",
        templateUrl: 'modules/pages/admin/admin.html',
        controller: 'adminController',
        controllerAs: 'c'
    });

})

.controller('adminController', function($rootScope, $scope, $state, UI) {

    if (!$rootScope.account) {
        $state.go('login');
    }

    // Test callback
    var okButtonWasPressed = function() {
        console.log("OK button was pressed!");
    }

    /**
     * Logs off the user
     */
    $scope.logoff = function() {
        $rootScope.account = null;
        $state.go('login');
    };

    /**
     * Exemplifies how to open a message box
     */
    $scope.showSomeInfo = function() {
        UI.showMessage("Blah...", null, okButtonWasPressed);
    };

    /**
     * Exemplifies how to open a message box
     */
    $scope.showSomeSuccess = function() {
        UI.showSuccess("Blah...", null, okButtonWasPressed);
    };

    /**
     * Exemplifies how to open a message box
     */
    $scope.showSomeHelp = function() {
        UI.showHelp("Blah...", null, okButtonWasPressed);
    };

    /**
     * Exemplifies how to open a message box
     */
    $scope.showSomeWarn = function() {
        UI.showWarn("Blah...", null, okButtonWasPressed);
    };

    /**
     * Exemplifies how to open a message box
     */
    $scope.showSomeError = function() {
        UI.showError("Blah...", null, okButtonWasPressed);
    };

});