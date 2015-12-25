angular.module('UI', [])

.run(function() {

    var element = $("<message-modal></message-modal>");
    $("body").append(element);

})

.directive('messageModal', function($rootScope) {

    return {
        restrict: 'E',
        templateUrl: "services/UI/message-modal.html",
        link: function(scope, element, attrs) {
            $rootScope.$on("modals.open", function (event, params) {
                scope.params = params;
                element.children().first().modal('show');
            });
        }
    }
})

.factory('UI', function($rootScope) {

    return({
        showMessage: function(message, title) {
            $rootScope.$emit( "modals.open", {
                title  : title || "Message",
                message: message,
                type   : "info"
            });
        },
        showSuccess: function(message, title) {
            $rootScope.$emit( "modals.open", {
                title  : title || "Success",
                message: message,
                type   : "success"
            });
        },
        showWarn: function(message, title) {
            $rootScope.$emit( "modals.open", {
                title  : title || "Warning",
                message: message,
                type   : "warn"
            });
        },
        showError: function(message, title) {
            $rootScope.$emit( "modals.open", {
                title  : title || "Error",
                message: message,
                type   : "error"
            });
        },
        showHelp: function(message, title) {
            $rootScope.$emit( "modals.open", {
                title  : title || "Help",
                message: message,
                type   : "help-book"
            });
        }
    });

})