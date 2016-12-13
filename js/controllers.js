

adminPanel.controller('dashCtrl', ['$scope', function($scope){
    $scope.name="Emmanuel";
}]);

adminPanel.controller('userCtrl', function ($location, $scope,$rootScope,$http, appFactory) {
    $rootScope.userFetched=false;

    appFactory.getUsers()
        .success(function (users) {
            $scope.users= users;
            $rootScope.userFetched=true;
        })
        .error(function (error) {
            $scope.status = 'Unable to load users: ' + error.message;
        });

    $scope.viewDetails=function (user) {

        appFactory.setUser(user);

        // var name=user.name;
        // var title=user.title;
        // var profile_pics=user.profile_pics;
        // var bio=user.bio;
        // var selectedUser={"name":user.name,"title":user.title,"profile_pics":user.profile_pics,"bio":user.bio};
        // $location.path('/user-details/'+name+'/'+title+'/'+profile_pics);
        $location.path('/user-details');
    };//View User details

    $scope.deleteUser=function (user) {
        // alert("Hello");
        // var userArray= $scope.users;
        // $scope.users.push(user);
    };//deleteUser

});

adminPanel.controller('userDetailsCtrl', function ($scope, $routeParams, appFactory) {

    var selUser=appFactory.getUser();

    $scope.name=selUser.name;
    $scope.title=selUser.title;
    $scope.profile_pics=selUser.profile_pics;
    $scope.bio=selUser.bio;
    // $scope.name=$routeParams.name;
    // $scope.title=$routeParams.title;
    // $scope.profile_pics=$routeParams.profile_pics;
    // $scope.bio=$routeParams.bio;
});

adminPanel.controller('navCtrl', function ($scope) {
    $scope.toggleSidebar=function () {
        $('.main-wrapper').toggleClass("sidebarDisplayed");
    };
});

