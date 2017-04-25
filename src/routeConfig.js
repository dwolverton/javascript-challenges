angular.module("jsExercises")
.config(function($routeProvider) {
    $routeProvider.when("/c/:challengeSetKey", {
        controller: "challengeListController",
        templateUrl: "templates/challengeList.html"
    }).when("/c/:challengeSetKey/:challengeNumber", {
        controller: "challengeController",
        templateUrl: "templates/challenge.html"
    }).when("/sets", {
        controller: "setsController",
        templateUrl: "templates/setsList.html"
    }).when("/admin/sets", {
        controller: "adminSetsController",
        templateUrl: "templates/edit-sets"
    }).when("/admin/challenge/new", {
        controller: "adminChallengeController",
        templateUrl: "templates/edit-challenge.html",
        resolve: {
          challenge: function() {
            return { testCases: [] };
          }
        }
    }).when("/admin/challenge/:challengeId", {
        controller: "adminChallengeController",
        templateUrl: "templates/edit-challenge.html",
        resolve: {
          challenge: function(apiService, $route) {
            return apiService.getChallenge($route.current.params.challengeId);
          }
        }
    }).otherwise({
        redirectTo: "/sets"
    });
});
