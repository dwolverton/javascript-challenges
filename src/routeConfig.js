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
    }).otherwise({
        redirectTo: "/sets"
    });
});
