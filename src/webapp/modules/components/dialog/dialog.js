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

        INFO : {
            name : "info",
            defaultTitle : "Message"
        },
        SUCCESS : {
            name : "success",
            defaultTitle : "Success"
        },
        WARN : {
            name : "warn",
            defaultTitle : "Warning"
        },
        ERROR : {
            name : "error",
            defaultTitle : "An Error Occurred"
        },
        HELP : {
            name : "help",
            defaultTitle : "Help"
        },

        /**
         * Shows the dialog box.
         *
         * @param message The content of the message
         * @param args A set of options: type, title and callback.
         */
        open: function(message, args) {

            args         = args || {};
            args.type    = args.type || this.INFO;
            args.title   = args.title || args.type.defaultTitle;
            args.actions = args.actions || [{
                label: "OK",
                callback: args.callback
            }]

            $rootScope.$emit( "dialog.open", {
                message : message,
                type    : args.type.name,
                title   : args.title,
                actions : args.actions
            });

        }

    });

})

.controller('DialogController', function($scope, $timeout) {

    /**
     * Executes the callback of the pressed button
     */
    $scope.fireAction = function(a) {
        
        if (this.action && this.action.callback) {
            $timeout(this.action.callback);
        }
    };

});
