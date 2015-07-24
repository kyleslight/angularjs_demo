angularDemoApp.filter({
	'initials': function(){
		return function(text){
			var names = text.split(' ');
			var holder = [];
			angular.forEach(names, function(name){
				holder.push(name.substring(0, 1) + '.');
			});

			return holder.join('');
		}
	}
});