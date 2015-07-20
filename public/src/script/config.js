var todoApp = angular.module('TodoApp', ['ngRoute']);

todoApp.config(function ($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/main.html',
			controller: 'MainController'
		})
		.when('/todo', {
			templateUrl: 'views/todo.html',
			controller: 'TodoController'
		})
		.when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'ContactController'
		})
		.when('/detail/:id', {
			templateUrl: 'views/detail.html',
			controller: 'DetailController'
		})
		.otherwise({ redirectTo: '/' });

	// $locationProvider
	// 	.html5Mode(true);
		
})