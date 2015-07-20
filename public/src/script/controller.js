todoApp.controller({
	'MainController': function($scope){

	},
	'TodoController': function($scope){
		//initialize
		$scope.todos = [{
			'title': 'Welcome!',
			'done': false,
		}];

		//functions
		$scope.addTodo = function(){
			var newTodo = {
				'title': 'untitle',
				'done': false
			}
			newTodo.title = $scope.newTodo;

			$scope.todos.push(newTodo);
			$scope.newTodo = '';
		};

		$scope.toggleDone = function($index){
			$scope.todos[$index].done = !$scope.todos[$index].done;
		}

		$scope.clearComplete = function(){
			$scope.todos = $scope.todos.filter(function(item){
				return !item.done;
			})
		};
	},
	'ContactController': function($scope, $http){
		$http.get('/fakedata/contacts.js').success(function(data){
			$scope.contacts = data;
		});
	},
	'DetailController': function($scope, $http, $routeParams){
		$http.get('/fakedata/contacts.js').success(function(data){
			// $scope.contacts = data;
			$scope.contact = data[$routeParams.id];
		});
	}
})