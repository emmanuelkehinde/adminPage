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

var adminPanel=angular.module('adminPanel', ['ngRoute']);


adminPanel.factory('appFactory',function ($http) {
	var factory={};
	var selectedUser={};

	factory.getUsers=function () {
		return $http.get('users.json');
	};

	factory.setUser=function (user) {
		selectedUser=user;
	};

	factory.getUser=function () {
		return selectedUser;
	};

	return factory;
});



