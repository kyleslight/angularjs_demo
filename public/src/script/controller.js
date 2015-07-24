angularDemoApp.controller({
    'MainController': function($scope) {

    },
    'TodoController': function($scope) {
        //initialize
        $scope.todos = [{
            'title': 'Welcome!',
            'done': false,
        }];

        //functions
        $scope.addTodo = function() {
            var newTodo = {
                'title': 'untitle',
                'done': false
            }
            newTodo.title = $scope.newTodo;

            $scope.todos.push(newTodo);
            $scope.newTodo = '';
        };

        $scope.toggleDone = function($index) {
            $scope.todos[$index].done = !$scope.todos[$index].done;
        }

        $scope.clearComplete = function() {
            $scope.todos = $scope.todos.filter(function(item) {
                return !item.done;
            })
        };
    },
    'ContactController': function($scope, $http) {
        $http.get('/fakedata/contacts.js').success(function(data) {
            $scope.contacts = data;
        });
    },
    'DetailController': function($scope, $http, $routeParams) {
        $http.get('/fakedata/contacts.js').success(function(data) {
            $scope.contact = data[$routeParams.id];
        });
    },
    'BasicEventController': function($scope) {
        $scope.astate = "NO EVENT";
        $scope.bstate = "NO ENENT";
    },
    'NgClassController': function($scope) {
        $scope.items = [{
            title: "Kyles",
            type: 1
        }, {
            title: "Kyels",
            type: 2
        }, {
            title: "Klyes",
            type: 1
        }, {
            title: "Kylse",
            type: 3
        }];

        $scope.map_style = {
            1: 'red',
            2: 'blue',
            3: 'green'
        };

        $scope.style1 = "red";
        $scope.style2 = "underline";
    },
    'WatchController': function($scope, $http) {
        $scope.setPage = function(index) {
            pagination.setCurrentPage(index);
            refreshPeople(index);
            return false;
        };

        $scope.goPrev = function() {
            if ($scope.prev == 0) return;
            $scope.setPage($scope.prev);
        };

        $scope.goNext = function() {
            $scope.setPage($scope.next);
        };

        var refreshPeople = function(currentPage) {
            var personUrl = 'http://www.filltext.com/?rows=' + currentPage + '&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true';
            $http.get(personUrl).success(function(data) {
                $scope.people = data;
            });
        };

        var pagination = {
            init: function(len) {
                var radius = (len - 1) / 2;
                var middle = (len + 1) / 2;

                this.currentPage = middle;
                this.currentList = [];
                this.setList(middle, radius);
                this.disablePrev = false;
                this.pageLen = len;
                this.prev = middle - radius - 1;
                this.next = middle + radius + 1;

                this.setCurrentPage(middle);
            },
            setList: function(middle, radius) {
                this.currentList = [];
                for (var i = middle - radius; i <= middle + radius; i++) {
                    this.currentList.push(i);
                };
            },
            setOriginalList: function() {
                this.currentList = [];
                for (var i = 1; i <= this.pageLen; i++) {
                    this.currentList.push(i);
                };
            },
            setCurrentPage: function(currentPage) {
                var radius = (this.pageLen - 1) / 2;
                var middle = currentPage;

                //set currentPage
                if (currentPage > 0) {
                    this.currentPage = currentPage;
                } else {
                    return;
                }

                //set currentList
                this.setList(middle, radius);
                if (currentPage == 1) {
                    this.disablePrev = true;
                } else {
                    this.disablePrev = false;
                };

                if (middle <= radius) {
                    this.setOriginalList();
                } else {
                    this.setList(middle, radius);
                }
                this.prev = middle - 1;
                this.next = middle + 1;

                // set scope things
                this.setScopeThings();
            },
            setScopeThings: function() {
                $scope.currentPage = this.currentPage;
                $scope.currentList = this.currentList;
                $scope.disablePrev = this.disablePrev;
                $scope.prev = this.prev;
                $scope.next = this.next;
            }
        };

        var pageLen = 11;
        pagination.init(pageLen);
        refreshPeople($scope.currentPage);


        // $scope.$watch('currentPage', function(newValue, oldValue){
        // 	$scope.switchPage(newValue);
        // });
    },
    'FilterController': function($scope, $http){
    	$http.get(
    		'/fakedata/zhihunews.js'
    	)
    	.success(function(data){
    		$scope.news = data;
    	});

        $scope.rule = 'id';

    	$scope.totalMoney = function(user){
    		return user.sales + user.bouns;
    	}
    }
})