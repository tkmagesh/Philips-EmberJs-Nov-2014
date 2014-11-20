App = Ember.Application.create();

App.Router.map(function() {
	this.resource("about");
  	this.resource('tasks', function(){
  		this.resource('task', {
  			path : ':task_id'
  		});
  	});
});

App.AboutRoute = Ember.Route.extend({
	model : function(){
		return {
			currentDateTime : new Date()
		}
	}
});

App.TasksRoute = Ember.Route.extend({
	model : function(){
		return tasks;
	}
})


App.TaskRoute = Ember.Route.extend({
	model : function(params){
		console.log(params);
		var result =  tasks.findBy("id", parseInt(params.task_id,10));
		console.log(result);
		return result;
	}
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});

var tasks = [
	{id : 1, name : 'Learn jQuery', isCompleted : false},
	{id : 2, name : 'Explore JavaScript', isCompleted : true},
	{id : 3, name : 'Watch a movie', isCompleted : false}
];
