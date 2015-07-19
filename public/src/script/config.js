var todoApp = angular.module('TodoApp', ['ngRoute']);

todoApp.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/main.html',
			controller: 'MainController'
		})
		.when('/todo', {
			templateUrl: 'views/todo.html',
			controller: 'TodoController'
		})
		.otherwise({ redirectTo: '/' })
		
})