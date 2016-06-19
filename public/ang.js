var myapp = angular.module('myapp', ['ngRoute','LocalStorageModule','smart-table','ngAnimate','ui.bootstrap']);


myapp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '/home.html',
        controller: 'mainController'
      }).
      when('/signup', {
        templateUrl: '/signup.html',
        controller: 'mainController'
      }).
      when('/login', {
        templateUrl: '/login.html',
        controller: 'mainController'
      }).
      when('/userportal', {
        templateUrl: '/userportal.html',
        controller: 'userController'
      }).
      when('/inventory', {
        templateUrl: '/inventory.html',
        controller: 'inventoryController'
      }).
      when('/marketPlace', {
        templateUrl: '/marketPlace.html',
        controller: 'userController'
      }).
      when('/contracts', {
        templateUrl: '/contracts.html',
        controller: 'userController'
      }).
      when('/orderLogistics', {
        templateUrl: '/orderLogistics.html',
        controller: 'userController'
      }).
      when('/marketData', {
        templateUrl: '/marketData.html',
        controller: 'userController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

  myapp.factory('userfactory', function(){
      userinfo = { };

      return {
          set: function(data){
              userinfo = data;

          },
          get: function(){
              return userinfo;
          }
      }
  });
