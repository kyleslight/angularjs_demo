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
			console.log($index);
		}

		$scope.clearComplete = function(){
			$scope.todos = $scope.todos.filter(function(item){
				return !item.done;
			})
		};
	}
})