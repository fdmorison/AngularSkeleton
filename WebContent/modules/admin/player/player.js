angular.module('player', ['ngResource'])

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('admin.player', {
        url: "/player",
        templateUrl: 'modules/admin/player/player.html',
        controller: 'playerController',
        controllerAs: 'c'
    });

})

.factory('Player', function($resource) {

    return $resource("v1/alioth/players");

})
    
.controller('playerController', function($scope, Player) {

    $scope.players = Player.query();
    
    /**
     * Load the currently online players
     */
    $scope.loadOnlinePlayers = function() {
        $scope.players = Player.query();
    };

});