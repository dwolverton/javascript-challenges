(function() {
angular.module("jsExercises")
.run(function($rootScope, $location) {
    if ($location.hash().startsWith("login=")) {
        var token = $location.hash().match(/login=([a-zA-Z0-9\/\+]+)/)[1];
        var isAdmin = $location.hash().indexOf('admin=true') !== -1;
        loginWithInfo({
            id: token,
            isAdmin: isAdmin
        });
        $location.hash("");
    } else if (getPersistentUserInfo()) {
        loginWithInfo(getPersistentUserInfo());
    } else {
        $rootScope.isLoggedIn = false;
    }

    function loginWithInfo(userInfo) {
      $rootScope.loggedInUser = userInfo;
      $rootScope.isLoggedIn = true;
      setPersistentUserInfo(userInfo);
    }
})
.factory("userService", function($rootScope, $location) {
    var userService = {
        isLoggedIn: function() {
            return $rootScope.isLoggedIn;
        },
        isAdmin: function() {
            return $rootScope.loggedInUser ? $rootScope.loggedInUser.isAdmin : false;
        },
        getAuthToken: function() {
            return $rootScope.loggedInUser ? $rootScope.loggedInUser.id : null;
        },
        logOut: function() {
            $rootScope.isLoggedIn = false;
            delete $rootScope.loggedInUser;
            setPersistentUserInfo(null);
            location.reload();
        },
        enforceAdmin: function() {
            if (!this.isAdmin()) {
                location.hash = "#!/";
                throw 'access denied to this route';
            }
        }
    }
    return userService;
});

function getPersistentUserInfo() {
    try {
      var token = localStorage.jsChallengeUserToken;
      var isAdmin = localStorage.jsChallengeUserIsAdmin;
      if (token) {
          return {
              id: token,
              isAdmin: isAdmin
          }
      } else {
          return null;
      }
    } catch (e) {
      // if localStorage is not available, no big deal.
      return null;
    };
}
function setPersistentUserInfo(userInfo) {
    try {
      if (userInfo) {
          localStorage.jsChallengeUserToken = userInfo.id;
          localStorage.jsChallengeUserIsAdmin = userInfo.isAdmin;
      } else {
          delete localStorage.jsChallengeUserToken;
          delete localStorage.jsChallengeUserIsAdmin;
      }
    } catch (e) {
      // if localStorage is not available, no big deal.
    };
}
})();
