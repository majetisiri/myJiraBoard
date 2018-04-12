var app = angular.module('myJiraBoardApp', []);
app.controller('projectsController', function() {
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
      this.projects=projects;
});

app.controller('ticketsController', function() {
      var tickets=[
        {
            '_id':'1',
            'name': 'MJB 1',
            'description': 'create login page view login.html',
            'project': 'My Jira Board',
            'status': 'To Do',
            'priority': 'Major',
            'createdAt': '04/11/2018',
            'assignee': 'Srividya Majeti',
            'createdBy': 'Srividya Majeti'
          },{
            '_id':'2',
            'name': 'MJB 2',
            'description': 'create register page view register.html',
            'project': 'My Jira Board',
            'status': 'To Do',
            'priority': 'Major',
            'createdAt': '04/11/2018',
            'assignee': 'Srividya Majeti',
            'createdBy': 'Srividya Majeti'
          },{
            '_id':'3',
            'name': 'MJB 3',
            'description': 'create forgot password page view forgot-password.html',
            'project': 'My Jira Board',
            'status': 'To Do',
            'priority': 'Major',
            'createdAt': '04/11/2018',
            'assignee': 'Srividya Majeti',
            'createdBy': 'Srividya Majeti'
          },{
            '_id':'4',
            'name': 'MJB 4',
            'description': 'create dashboard page view dashboard.html',
            'project': 'My Jira Board',
            'status': 'To Do',
            'priority': 'Major',
            'createdAt': '04/11/2018',
            'assignee': 'Srividya Majeti',
            'createdBy': 'Srividya Majeti'
          },{
            '_id':'5',
            'name': 'MJB 5',
            'description': 'create backlog page view. Backlog.html',
            'project': 'My Jira Board',
            'status': 'To Do',
            'priority': 'Major',
            'createdAt': '04/11/2018',
            'assignee': 'Srividya Majeti',
            'createdBy': 'Srividya Majeti'
          },{
            '_id':'6',
            'name': 'MJB 6',
            'description': 'create project task page view. /project_id.html',
            'project': 'My Jira Board',
            'status': 'To Do',
            'priority': 'Major',
            'createdAt': '04/11/2018',
            'assignee': 'Srividya Majeti',
            'createdBy': 'Srividya Majeti'
          },{
            '_id':'7',
            'name': 'MJB 7',
            'description': 'create strike through task bar in dashboard',
            'project': 'My Jira Board',
            'status': 'To Do',
            'priority': 'Major',
            'createdAt': '04/11/2018',
            'assignee': 'Srividya Majeti',
            'createdBy': 'Srividya Majeti'
          },{
            '_id':'8',
            'name': 'MJB 8',
            'description': 'To be done tickets toBeDone.html',
            'project': 'My Jira Board',
            'status': 'To Do',
            'priority': 'Major',
            'createdAt': '04/11/2018',
            'assignee': 'Srividya Majeti',
            'createdBy': 'Srividya Majeti'
          },{
            '_id':'9',
            'name': 'MJB 9',
            'description': 'review tickets review.html',
            'project': 'My Jira Board',
            'status': 'To Do',
            'priority': 'Major',
            'createdAt': '04/11/2018',
            'assignee': 'Srividya Majeti',
            'createdBy': 'Srividya Majeti'
          },{
            '_id':'10',
            'name': 'MJB 10',
            'description': 'Bug Tickets bugs.html',
            'project': 'My Jira Board',
            'status': 'To Do',
            'priority': 'Major',
            'createdAt': '04/11/2018',
            'assignee': 'Srividya Majeti',
            'createdBy': 'Srividya Majeti'
          },{
            '_id':'11',
            'name': 'MJB 11',
            'description': 'Done Tickets done.html',
            'project': 'My Jira Board',
            'status': 'To Do',
            'priority': 'Major',
            'createdAt': '04/11/2018',
            'assignee': 'Srividya Majeti',
            'createdBy': 'Srividya Majeti'
          },{
            '_id':'12',
            'name': 'SUP 1',
            'description': 'set up python scrapy code',
            'project': 'My Jira Board',
            'status': 'To Do',
            'priority': 'Major',
            'createdAt': '04/11/2018',
            'assignee': 'Srividya Majeti',
            'createdBy': 'Srividya Majeti'
          },{
            '_id':'13',
            'name': 'SUP 2',
            'description': 'Extract Data From Manufacturers',
            'project': 'My Jira Board',
            'status': 'To Do',
            'priority': 'Major',
            'createdAt': '04/11/2018',
            'assignee': 'Srividya Majeti',
            'createdBy': 'Srividya Majeti'
          },{
            '_id':'14',
            'name': 'SUP 3',
            'description': 'Build API',
            'project': 'My Jira Board',
            'status': 'To Do',
            'priority': 'Major',
            'createdAt': '04/11/2018',
            'assignee': 'Srividya Majeti',
            'createdBy': 'Srividya Majeti'
          },{
            '_id':'15',
            'name': 'SUP 4',
            'description': 'Have HTML Pages Ready',
            'project': 'My Jira Board',
            'status': 'To Do',
            'priority': 'Major',
            'createdAt': '04/11/2018',
            'assignee': 'Srividya Majeti',
            'createdBy': 'Srividya Majeti'
          },{
            '_id':'16',
            'name': 'EG 1',
            'description': 'sample ticket',
            'project': 'My Jira Board',
            'status': 'To Do',
            'priority': 'Major',
            'createdAt': '04/11/2018',
            'assignee': 'Srividya Majeti',
            'createdBy': 'Srividya Majeti'
          },{
            '_id':'17',
            'name': 'EG 2',
            'description': 'sample ticket',
            'project': 'My Jira Board',
            'status': 'To Do',
            'priority': 'Major',
            'createdAt': '04/11/2018',
            'assignee': 'Srividya Majeti',
            'createdBy': 'Srividya Majeti'
          },{
            '_id':'18',
            'name': 'EG 3',
            'description': 'sample ticket',
            'project': 'My Jira Board',
            'status': 'To Do',
            'priority': 'Major',
            'createdAt': '04/11/2018',
            'assignee': 'Srividya Majeti',
            'createdBy': 'Srividya Majeti'
          },{
            '_id':'19',
            'name': 'EG 4',
            'description': 'sample ticket',
            'project': 'My Jira Board',
            'status': 'To Do',
            'priority': 'Major',
            'createdAt': '04/11/2018',
            'assignee': 'Srividya Majeti',
            'createdBy': 'Srividya Majeti'
          },{
            '_id':'20',
            'name': 'EG 5',
            'description': 'sample ticket',
            'project': 'My Jira Board',
            'status': 'To Do',
            'priority': 'Major',
            'createdAt': '04/11/2018',
            'assignee': 'Srividya Majeti',
            'createdBy': 'Srividya Majeti'
          }
        ];
          this.tickets=tickets;
    });