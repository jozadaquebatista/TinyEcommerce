app.config(function($routeProvider){
    $routeProvider
    .when('/produtos', {
        templateUrl: 'views/product.html',
        controller: 'dataHandleCtrl'
    })
    .when('/pedidos', {
        templateUrl: 'views/order.html',
        controller: 'dataHandleCtrl'
    })
    .when('/perfil', {
        templateUrl: 'views/profile.html',
        controller: 'dataHandleCtrl'
    })
    .otherwise({
        redirectTo: '/produtos'
    });
});
