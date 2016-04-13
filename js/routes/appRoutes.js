myApp.config(function($routeProvider){
    $routeProvider
    .when('/pedidos', {
        templateUrl: 'myPageLoad.html',
        controller: 'dataHandleCtrl'
    })
    .when('/profile', {
        templateUrl: 'views/products.html',
        controller: 'dataHandleCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
});
