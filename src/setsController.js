angular.module('jsExercises')
.controller("setsController", function($scope, challengeService) {
    $scope.initController();
    $scope.loading = true;

    challengeService.getSets().then(function(sets) {
        $scope.sets = sets;
        $scope.loading = false;
    });
});
