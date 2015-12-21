angular.module('product', [])

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('admin.product', {
        url: "/product",
        templateUrl: 'modules/admin/product/product.html',
        controller: 'productController',
        controllerAs: 'c'
    });

})
	
.controller('productController', function($scope) {

    $scope.products = [
            {name: "ProductA"},
            {name: "ProductB"}
    ]

    /**
     * Does something...
     */
    $scope.method1 = function() {

    };

});