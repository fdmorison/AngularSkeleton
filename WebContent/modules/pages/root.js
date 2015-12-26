angular.module('root',['ui.router','login','admin','UI'])

.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/login");

});
