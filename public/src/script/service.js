angularDemoApp.service({
    'ContactService': function ($http, $q) {
        this.getContact = function () {
            var getContactDefer = $q.defer();
            $http.get('/getContact').success(function (data) {
                getContactDefer.resolve(data);
            });
            return getContactDefer.promise;
        };

        this.postContact = function (obj) {
            var postContactDefer = $q.defer();
            $http.post('/postContact', obj).success(function (data) {
                postContactDefer.resolve(data);
            });
            return postContactDefer.promise;
        };

        this.removeContact = function (_id) {
            var removeContactDefer = $q.defer();
            $http.delete('/deleteContact/' + _id).success(function (data) {
                removeContactDefer.resolve(data);
            });
            return removeContactDefer.promise;
        };

        this.modifyContact = function (obj) {
            var modifyContactDefer = $q.defer();
            $http.put('/modifyContact', obj).success(function (data) {
                modifyContactDefer.resolve(data);
            });
            return modifyContactDefer.promise;
        }
    },
    'ChatService': function ($rootScope) {
        var socket = io.connect();

        this.receiveChat = function (eventName, callback) {
            socket.on(eventName, function () {
                var args = arguments;
                $rootScope.$apply(function () {
                    callback.apply(socket, args);
                });
            });
        };

        this.sendChat = function (eventName, chatContent) {
            socket.emit(eventName, chatContent);
        };
    }
});