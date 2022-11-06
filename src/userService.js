(function() {
angular.module("jsExercises")
.factory("userService", function($rootScope, $location) {
    var userService = {
        isLoggedIn: function() {
            return false;
        },
        isAdmin: function() {
            return false;
        },
        getAuthToken: function() {
            return null;
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
