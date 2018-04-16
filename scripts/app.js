'use strict';

angular.module('myJiraBoardApp',['ngRoute'])
.config(function($routeProvider) {
        $routeProvider
            // route for the contactus page
            .when('/dashboard', {
                templateUrl : 'dashboardView.html',
                controller  : 'projectsController',
                controller  : 'tasksController'
            })
            // route for the menu page
            .when('/backlog', {
                templateUrl : 'backlog.html',
                controller  : 'ticketsController'
            })
            // route for the menu page
            .when('/projectTickets/:id', {
                templateUrl : 'projectTickets.html',
                controller  : 'ticketsController'
            })
            .otherwise('/dashboard');
    })

;