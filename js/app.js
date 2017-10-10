$( document ).ready(function() {

	
	// $('#sidebar_hamburger').click(function(e){
	// 	e.preventDefault();
	// 	$('.main-wrapper').toggleClass("sidebarDisplayed");
	// });

	//Make the sidebar search box respond to focus


	$('.search_input').focus(function(){
		$('.sidebar-form').addClass("opacity1");
	});
	$('.search_input').blur(function(){
		$('.sidebar-form').removeClass("opacity1");
	});
	
});

var adminPanel=angular.module('adminPanel', ['ui.router','ngCookies','ngAnimate']);

adminPanel.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home/dashboard');

    $stateProvider
        .state('login',{
            url:'/login',
            templateUrl:'templates/login.html',
            controller: "loginCtrl"
        })

        .state('home', {
            url: '/home',
            views: {
                '': { templateUrl: 'templates/home.html' },
                '@home': {
                    templateUrl: 'templates/dashboard.html'
                },
                'nav@home': {
                    templateUrl: 'templates/nav.html'
                },
                'sidebar@home': {
                    templateUrl: 'templates/sidebar.html'
                }
            },
            onEnter:function ($state,$cookies) {
                if ($cookies.get('loggedIn')==null){
                    $state.go('login');
                }
            },
            controller:'homeController'
        })

        .state('home.dashboard', {
            url: '/dashboard',
            templateUrl: 'templates/dashboard.html'
        })

        .state('home.users', {
            url: '/users',
            templateUrl: 'templates/users.html',
            // views:{
            //     '':{templateUrl: 'templates/users-list.html'},
            //     '/user-details':{templateUrl: 'templates/user-details.html'}
            // },
            controller: 'userCtrl'
        })

        .state('home.details', {
            url: '/users/user-details/:id',
            templateUrl: 'templates/user-details.html',
            controller: 'userDetailsCtrl'
        })

        .state('home.mail', {
            url: '/mail',
            templateUrl: 'templates/mail.html'
        })

        .state('home.tasks', {
            url: '/tasks',
            templateUrl: 'templates/tasks.html'
        });
});

