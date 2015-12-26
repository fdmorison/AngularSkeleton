angular.module('dialog', [])

.run(function() {

    $("body").append("<dialog-box/>");

})

.directive('dialogBox', function($rootScope) {

    return {
        restrict: 'E',
        templateUrl: "modules/components/dialog/dialog.html",
        controller: "DialogController",
        link: function(scope, element, attrs) {
            $rootScope.$on("dialog.open", function (event, params) {
                scope.params = params;
                element.children().first().modal('show');
            });
        }
    }
})

.factory('Dialog', function($rootScope) {

    return({
        open: function(title, message, type, callback) {
            $rootScope.$emit( "dialog.open", {
                title   : title,
                message : message,
                type    : type,
                callback: callback
            });
        }
    });

})

.controller('DialogController', function($scope) {

    /**
     * Executes a callback when the OK button is pressed
     */
    $scope.fireOK = function() {
        if ($scope.params && $scope.params.callback) {
            $scope.params.callback();
        }
    };

});
