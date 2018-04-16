'use strict';

angular.module('myJiraBoardApp')

	.factory('projectFactory',function(){
		var projFac={};
		var projects=[
		    {
		        '_id':'1',
		        'name': 'My Jira Board',
		        'description': 'My own task tracking project which works based on agile frame work similar to Jira',
		        'image_url': 'https://startbootstrap.com/assets/img/templates/sb-admin.jpg'
		      },{
		        '_id':'2',
		        'name': 'Start Up Project',
		        'description': 'All clothes manufacturers in one website.',
		        'image_url': 'https://i.pinimg.com/originals/d3/c7/6e/d3c76eea2e5e58ecf5e845c7b1b0bffd.jpg'
		      },{
		        '_id':'3',
		        'name': 'Personal Portfolio',
		        'description': 'Personal portfolio with my hobbies',
		        'image_url': 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201802/portfolio.jpeg?FiDuEq_3VnAh8wxpLykw3aWI.eIslcbH'
		      }
		    ];

		   projFac.getProjects= function(){
		   	return projects;
		   };

		   projFac.getProject= function(index){
		   	return projects[index];
		   };

		   return projFac;
	})
    
    .factory('tasksFactory',function(){
        var taskFac={};
        var tasks=[{
            '_id':'0',
            'description':'apply for ssn taxes',
            'status':'must'
        },{
            '_id':'1',
            'description':'pay odu parking fees',
            'status':'must'
        },{
            '_id':'2',
            'description':'pay rayleigh speeding ticket',
            'status':'must'
        },{
            '_id':'3',
            'description':'settle up splitwise',
            'status':'must'
        },{
            '_id':'4',
            'description':'take kurtis pictures',
            'status':'to do'
        },{
            '_id':'5',
            'description':'grocery shopping',
            'status':'to do'
        },{
            '_id':'6',
            'description':'pay rent',
            'status':'done'
        },{
            '_id':'7',
            'description':'upload videos and pictures instagram',
            'status':'to do'
        },{
            '_id':'8',
            'description':'put dress money in splitwise',
            'status':'done'
        }];

        taskFac.getTasks= function(){
            return tasks;
        };

        taskFac.getToDoTasks= function(){
            var toDoTasks = [];
            var task={};
            for (var i = 0, len = tasks.length; i < len; i++) {
                task = tasks[i];
                if (task['status'] =="to do") { 
                    toDoTasks.push(task);
                }
            }
            return toDoTasks;
        };

         taskFac.getMustTasks= function(){
            var mustTasks = [];
            var task={};
            for (var i = 0, len = tasks.length; i < len; i++) {
                task = tasks[i];
                if (task['status'] =="must") { 
                    mustTasks.push(task);
                }
            }
            return mustTasks;
        };
         taskFac.getDoneTasks= function(){
            var doneTasks = [];
            var task={};
            for (var i = 0, len = tasks.length; i < len; i++) {
                task = tasks[i];
                if (task['status'] =="done") { 
                    doneTasks.push(task);
                }
            }
            return doneTasks;
        };
        return taskFac;
    })

	.factory('ticketFactory',function(){
			var ticFac={};
			var tickets=[
        {
            '_id':'1',
            'name': 'MJB 1',
            'description': 'create login page view login.html',
            'project_id': 1,
            'status': 'To Do',
            'priority': 'Major',
            'createdAt': '04/11/2018',
            'assignee': 'Srividya Majeti',
            'createdBy': 'Srividya Majeti'
          },{
            '_id':'2',
            'name': 'MJB 2',
            'description': 'create register page view register.html',
            'project_id': 1,
            'status': 'To Do',
            'priority': 'Major',
            'createdAt': '04/11/2018',
            'assignee': 'Srividya Majeti',
            'createdBy': 'Srividya Majeti'
          },{
            '_id':'3',
            'name': 'MJB 3',
            'description': 'create forgot password page view forgot-password.html',
            'project_id': 1,
            'status': 'To Do',
            'priority': 'Major',
            'createdAt': '04/11/2018',
            'assignee': 'Srividya Majeti',
            'createdBy': 'Srividya Majeti'
          },{
            '_id':'4',
            'name': 'MJB 4',
            'description': 'create dashboard page view dashboard.html',
            'project_id': 1,
            'status': 'To Do',
            'priority': 'Major',
            'createdAt': '04/11/2018',
            'assignee': 'Srividya Majeti',
            'createdBy': 'Srividya Majeti'
          },{
            '_id':'5',
            'name': 'MJB 5',
            'description': 'create backlog page view. Backlog.html',
            'project_id': 1,
            'status': 'To Do',
            'priority': 'Major',
            'createdAt': '04/11/2018',
            'assignee': 'Srividya Majeti',
            'createdBy': 'Srividya Majeti'
          },{
            '_id':'6',
            'name': 'MJB 6',
            'description': 'create project task page view. /project_id.html',
            'project_id': 1,
            'status': 'To Do',
            'priority': 'Major',
            'createdAt': '04/11/2018',
            'assignee': 'Srividya Majeti',
            'createdBy': 'Srividya Majeti'
          },{
            '_id':'7',
            'name': 'MJB 7',
            'description': 'create strike through task bar in dashboard',
            'project_id': 1,
            'status': 'To Do',
            'priority': 'Major',
            'createdAt': '04/11/2018',
            'assignee': 'Srividya Majeti',
            'createdBy': 'Srividya Majeti'
          },{
            '_id':'8',
            'name': 'MJB 8',
            'description': 'To be done tickets toBeDone.html',
            'project_id': 1,
            'status': 'To Do',
            'priority': 'Major',
            'createdAt': '04/11/2018',
            'assignee': 'Srividya Majeti',
            'createdBy': 'Srividya Majeti'
          },{
            '_id':'9',
            'name': 'MJB 9',
            'description': 'review tickets review.html',
            'project_id': 1,
            'status': 'To Do',
            'priority': 'Major',
            'createdAt': '04/11/2018',
            'assignee': 'Srividya Majeti',
            'createdBy': 'Srividya Majeti'
          },{
            '_id':'10',
            'name': 'MJB 10',
            'description': 'Bug Tickets bugs.html',
            'project_id': 1,
            'status': 'To Do',
            'priority': 'Major',
            'createdAt': '04/11/2018',
            'assignee': 'Srividya Majeti',
            'createdBy': 'Srividya Majeti'
          },{
            '_id':'11',
            'name': 'MJB 11',
            'description': 'Done Tickets done.html',
            'project_id': 1,
            'status': 'To Do',
            'priority': 'Major',
            'createdAt': '04/11/2018',
            'assignee': 'Srividya Majeti',
            'createdBy': 'Srividya Majeti'
          },{
            '_id':'12',
            'name': 'SUP 1',
            'description': 'set up python scrapy code',
            'project_id': 2,
            'status': 'To Do',
            'priority': 'Major',
            'createdAt': '04/11/2018',
            'assignee': 'Srividya Majeti',
            'createdBy': 'Srividya Majeti'
          },{
            '_id':'13',
            'name': 'SUP 2',
            'description': 'Extract Data From Manufacturers',
            'project_id': 2,
            'status': 'To Do',
            'priority': 'Major',
            'createdAt': '04/11/2018',
            'assignee': 'Srividya Majeti',
            'createdBy': 'Srividya Majeti'
          },{
            '_id':'14',
            'name': 'SUP 3',
            'description': 'Build API',
            'project_id': 2,
            'status': 'To Do',
            'priority': 'Major',
            'createdAt': '04/11/2018',
            'assignee': 'Srividya Majeti',
            'createdBy': 'Srividya Majeti'
          },{
            '_id':'15',
            'name': 'SUP 4',
            'description': 'Have HTML Pages Ready',
            'project_id': 2,
            'status': 'To Do',
            'priority': 'Major',
            'createdAt': '04/11/2018',
            'assignee': 'Srividya Majeti',
            'createdBy': 'Srividya Majeti'
          },{
            '_id':'16',
            'name': 'PF 1',
            'description': 'sample ticket',
            'project_id': 3,
            'status': 'To Do',
            'priority': 'Major',
            'createdAt': '04/11/2018',
            'assignee': 'Srividya Majeti',
            'createdBy': 'Srividya Majeti'
          },{
            '_id':'17',
            'name': 'PF 2',
            'description': 'sample ticket',
            'project_id': 3,
            'status': 'To Do',
            'priority': 'Major',
            'createdAt': '04/11/2018',
            'assignee': 'Srividya Majeti',
            'createdBy': 'Srividya Majeti'
          },{
            '_id':'18',
            'name': 'PF 3',
            'description': 'sample ticket',
            'project_id': 3,
            'status': 'To Do',
            'priority': 'Major',
            'createdAt': '04/11/2018',
            'assignee': 'Srividya Majeti',
            'createdBy': 'Srividya Majeti'
          },{
            '_id':'19',
            'name': 'PF 4',
            'description': 'sample ticket',
            'project_id': 3,
            'status': 'To Do',
            'priority': 'Major',
            'createdAt': '04/11/2018',
            'assignee': 'Srividya Majeti',
            'createdBy': 'Srividya Majeti'
          },{
            '_id':'20',
            'name': 'PF 5',
            'description': 'sample ticket',
            'project_id': 3,
            'status': 'To Do',
            'priority': 'Major',
            'createdAt': '04/11/2018',
            'assignee': 'Srividya Majeti',
            'createdBy': 'Srividya Majeti'
          }
        ];

	   ticFac.getPrjTickets= function(prjName){
            var prjTickets = [];
            var ticket={};
            for (var i = 0, len = tickets.length; i < len; i++) {
                ticket = tickets[i];
                if (ticket['project_id'] ==prjName) { 
                    prjTickets.push(ticket);
                }
            }
            return prjTickets;
	   };

       ticFac.getTickets= function(){
            return tickets;
       };

			   return ticFac;
		});