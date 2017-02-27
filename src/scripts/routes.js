/**
 * Created by Administrator on 2016/11/1.
 */
var routeExample=angular.module('ngRouteExample', ['ngRoute'])

routeExample.config(function ($routeProvider) {
        $routeProvider.
        when('/home', {
            templateUrl: 'src/view/home.html',
            controller: 'HomeController'
        }).
        when('/contact', {
            templateUrl: 'src/view/contact.html',
            controller: 'contactController'
        }).
        when('/product', {
            templateUrl: 'src/view/product.html',
            controller: 'AboutController'
        }).
        //when('/mycase', {
        //    templateUrl: 'src/view/mycase.html',
        //    controller: 'mycaseController'
        //}).
        when('/resolve', {
            templateUrl: 'src/view/resolve.html',
            controller: 'resolveController'
        }).
        //when('/join', {
        //    templateUrl: 'src/view/join.html',
        //    controller: 'joinController'
        //}).
        otherwise({
            redirectTo: '/home'
        });

    //$locationProvider.html5Mode(true);//去掉url井号；
    });
