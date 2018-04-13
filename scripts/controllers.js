'use strict';

var app = angular.module('myJiraBoardApp');
app.controller('projectsController', ['$scope','projectFactory',function($scope,projectFactory) {
  	$scope.projects=projectFactory.getProjects();
}]);

app.controller('ticketsController', ['$scope','ticketFactory',function($scope,ticketFactory) {
 	$scope.tickets=ticketFactory.getTickets();
}]);


app.controller('tasksController', ['$scope','tasksFactory',function($scope,tasksFactory) {
	$scope.tasks=tasksFactory.getTasks();
	$scope.toDoTasks=tasksFactory.getToDoTasks();
	$scope.mustTasks=tasksFactory.getMustTasks();
   	$scope.doneTasks=tasksFactory.getDoneTasks();
}]);