angular.module("jsExercises")
.config(function($routeProvider) {
    $routeProvider.when("/c/:challengeSetId", {
        controller: "challengeListController",
        templateUrl: "templates/challengeList.html"
    }).when("/c/:challengeSetId/:challengeNumber", {
        controller: "challengeController",
        templateUrl: "templates/challenge.html"
    }).otherwise({
        redirectTo: "/c/basic/1"
    });
});
