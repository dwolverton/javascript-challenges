angular.module("jsExercises")
.config(function($routeProvider) {
    $routeProvider.when("/c/:challengeSetId", {
        controller: "challengeListController",
        templateUrl: "templates/challengeList.html"
    }).when("/c/:challengeSetId/:challengeNumber", {
        controller: "challengeController",
        templateUrl: "templates/challenge.html"
    }).when("/sets", {
        controller: "setsController",
        templateUrl: "templates/setsList.html"
    }).otherwise({
        redirectTo: "/sets"
    });
});
