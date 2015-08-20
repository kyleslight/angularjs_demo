var angularDemoApp = angular.module('AngularDemoApp', ['ngRoute']);

angularDemoApp.config(function($routeProvider, $locationProvider) {
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
        .when('/chat', {
            templateUrl: 'views/chat.html',
            controller: 'ChatController'
        })
        .when('/detail/:id', {
            templateUrl: 'views/detail.html',
            controller: 'DetailController'
        })
        .when('/basicEvent', {
            templateUrl: 'views/basicEvent.html',
            controller: 'BasicEventController'
        })
        .when('/switch', {
            templateUrl: 'views/switch.html',
        })
        .when('/ngclass', {
        	templateUrl: 'views/ngclass.html',
        	controller: 'NgClassController'
        })
        .when('/watch', {
        	templateUrl: 'views/watch.html',
        	controller: 'WatchController'
        })
        .when('/filter', {
        	templateUrl: 'views/filter.html',
        	controller: 'FilterController'
        })
        .when('/trans', {
            templateUrl: 'views/trans.html',
            controller: 'TransController'
        })
        .otherwise({
            redirectTo: '/'
        });

    // $locationProvider
    // 	.html5Mode(true);

})
