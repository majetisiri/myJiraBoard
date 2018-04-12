'use strict';

var app = angular.module('myJiraBoardApp');
app.controller('projectsController', ['$scope','projectFactory',function($scope,projectFactory) {
  
      $scope.projects=projectFactory.getProjects();
}]);

app.controller('ticketsController', ['$scope','ticketFactory',function($scope,ticketFactory) {
      
          $scope.tickets=ticketFactory.getTickets();
    }]);