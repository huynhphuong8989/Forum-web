var vitechApp = angular.module('vitechApp', [
  'ngRoute',
]);

vitechApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      }).
      when('/topic', {
        templateUrl: 'views/topic.html',
        controller: 'TopicCtrl'
      }).
      when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      }).
      when('/ebook', {
        templateUrl: 'views/ebook.html',
        controller: 'EbookCtrl'
      }).
      when('/fordev', {
        templateUrl: 'views/fordev.html',
        controller: 'FordevCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);