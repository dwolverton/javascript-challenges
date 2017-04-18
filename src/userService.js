angular.module("jsExercises")
.run(function($rootScope, $location) {
    if ($location.hash().startsWith("login=")) {
        var token = $location.hash().match(/login=([a-zA-Z0-9\/\+]+)/)[1];
        loginWithToken(token);
        $location.hash("");
    } else if (getPersistentUserToken()) {
        loginWithToken(getPersistentUserToken());
    } else {
        $rootScope.isLoggedIn = false;
    }

    function loginWithToken(token) {
      $rootScope.loggedInUser = {
          id: token
      };
      $rootScope.isLoggedIn = true;
      setPersistentUserToken(token);
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
            setPersistentUserToken(null);
            location.reload();
        }
    }
    return userService;
});

function getPersistentUserToken() {
    try {
      return localStorage.jsChallengeUserToken;
    } catch (e) {
      // if localStorage is not available, no big deal.
      return null;
    };
}
function setPersistentUserToken(token) {
    try {
      if (token) {
          localStorage.jsChallengeUserToken = token;
      } else {
          delete localStorage.jsChallengeUserToken
      }
    } catch (e) {
      // if localStorage is not available, no big deal.
    };
}
