angular.module('jsExercises')
.controller("setsController", function($scope, challengeService) {
    $scope.initController();
    challengeService.getSets().then(function(sets) {
        $scope.sets = sets;
    });
});
