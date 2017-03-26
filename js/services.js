adminPanel.factory('AppFactory',function ($http) {
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