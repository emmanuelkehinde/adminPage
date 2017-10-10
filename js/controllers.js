
adminPanel.controller('loginCtrl', function ($scope,$state,$cookies) {
    $scope.errorMsg=null;

    $scope.login=function () {
        if ($scope.userName==""||$scope.userPass==""||$scope.userName!="admin"||$scope.userPass!="admin"){
            $scope.errorMsg="Check your login details!"
        }else{
            $cookies.put('loggedIn',true);
            $state.go('home.dashboard');
        }
    };

    $scope.closeAlert=function () {
        $scope.errorMsg=null;
    }
});

adminPanel.controller('homeController',function ($scope,$state,$cookies) {
    $scope.signOut=function () {
        $cookies.remove('loggedIn');
        // $rootScope.loggedIn=false;
        $state.go('login');
    };

    $scope.toggleSidebar=function () {
        $('.main-wrapper').toggleClass("sidebarDisplayed");
    };

    // if ($rootScope.loggedIn==false){
    //     $state.go('login');
    // }
});

adminPanel.controller('dashCtrl', ['$scope', function($scope){
    $scope.name="Emmanuel";
}]);

adminPanel.controller('userCtrl', function ($scope,$rootScope, AppFactory) {
    $rootScope.userFetched=false;

    AppFactory.getUsers()
        .success(function (users) {
            $scope.users= users;
            $rootScope.userFetched=true;
        })
        .error(function (error) {
            $scope.status = 'Unable to load users: ' + error.message;
        });

    $scope.deleteUser=function (user) {

    };//deleteUser

    $scope.saveUser=function (user) {
        AppFactory.setUser(user);
    };

});

adminPanel.controller('userDetailsCtrl', function ($scope, AppFactory) {

    var selUser=AppFactory.getUser();

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

});

