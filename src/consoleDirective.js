angular.module("jsExercises")
.directive("console", function() {

    return {
        scope: {
            consoleLines: "="
        },
        templateUrl: "templates/console.html"
    }
});
