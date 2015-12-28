angular.module('main',['ui.router','login','admin','UI'])

.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/login");

});
