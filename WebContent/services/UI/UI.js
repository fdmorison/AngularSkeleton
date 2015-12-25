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
                message: message
            });
        }
    });

})