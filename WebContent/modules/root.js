angular.module('root',['ui.router','login','admin'])

.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/login");

});
