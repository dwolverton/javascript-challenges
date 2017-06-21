angular.module('jsExercises')
.controller('viewSubmissionsController', function($scope, apiService) {
    if (!$scope.enforceAdmin()) {
        return;
    }
    $scope.sidebar.keepOpen = false;

    apiService.getGroups().then(function(groups) {
        $scope.groups = groups;
    });
    apiService.getSets().then(function(sets) {
        $scope.sets = sets;
    });
})
