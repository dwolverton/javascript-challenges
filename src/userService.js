angular.module("jsExercises")
.run(function($rootScope, $location) {
    if ($location.hash().startsWith("login=")) {
        var userId = $location.hash().match(/login=(\d+)/)[1];
        $rootScope.loggedInUser = {
            id: userId
        };
        $rootScope.isLoggedIn = true;
        $location.hash("");
    } else {
        $rootScope.isLoggedIn = false;
    }
})
.factory("userService", function($rootScope) {
    var userService = {
        isLoggedIn: function() {
            return $rootScope.isLoggedIn;
        },
        getAuthToken: function() {
            return $rootScope.loggedInUser ? $rootScope.loggedInUser.id : null;
        },
        logOut: function() {
            $rootScope.isLoggedIn = false;
            delete $rootScope.loggedInUser;
        }
    }
    return userService;
});
