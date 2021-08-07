var app=angular.module("myapp",['ngRoute']);
app.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl:'template/home.html',
        controller:'FirstController'
    }).when('/about',{
        templateUrl:'template/about.html',
        controller:'SecondController'
    }).when('/contact',{
        templateUrl:'template/contact.html',
        controller:'ThirdController'
    }).when("/gk",{
        templateUrl:"template/gk.html",
        controller:"gk"
    }).when("/maths",{
        templateUrl:"template/maths.html",
        controller:"maths"
    }).when("/english",{
        templateUrl:"template/english.html",
        controller:"english"
    }).when("/previous",{
        templateUrl:"template/previous.html",
        controller:"previous"
    }).when("/current",{
        templateUrl:"template/current.html",
        controller:"current"
    }).when("/scert",{
        templateUrl:"template/scert.html",
        controller:"scert"
    }).when("/next-gk1",{
        templateUrl:"template/gk1.html",
        controller:"gk1"
    })
})