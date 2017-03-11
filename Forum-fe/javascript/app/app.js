var forumApp = angular.module('forumApp', [
  'ngRoute',
]);

forumApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
       when('/question', {
        templateUrl: 'views/question.html',
        controller: 'QuestionCtrl'
      }).
        when('/fordev', {
        templateUrl: 'views/fordev.html',
        controller: 'FordevCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);