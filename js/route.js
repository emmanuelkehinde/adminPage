adminPanel.config(function($routeProvider) {
    $routeProvider
        .when('/',
            {
                controller: 'dashCtrl',
                templateUrl: 'templates/dashboard.html'
            })
        .when('/mail',
            {
                // controller: 'mailCtrl',
                templateUrl: 'templates/mail.html'
            })
        .when('/users',
            {
                controller: 'userCtrl',
                templateUrl: 'templates/users.html'
            })
        .when('/user-details',
            {
                controller: 'userDetailsCtrl',
                templateUrl: 'templates/user-details.html'
            })
        .when('/tasks',
            {
                // controller: 'userCtrl',
                templateUrl: 'templates/tasks.html'
            })
        .otherwise({redirectTo: '/'})
});