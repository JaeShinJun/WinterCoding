'use strict';

var myApp = angular.module('myApp', [
    'ngRoute', 
]); 

myApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: '/templates/index.html', 
            }).
            otherwise({
                redirectTo: '/' 
            }); 
    }
]);


