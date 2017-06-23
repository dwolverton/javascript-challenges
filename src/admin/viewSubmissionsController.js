angular.module('jsExercises')
.controller('viewSubmissionsController', function($scope, apiService) {
    $scope.initAdminController();

    apiService.getGroups().then(function(groups) {
        $scope.groups = groups;
    });
    apiService.getSets().then(function(sets) {
        $scope.sets = sets;
    });

    $scope.$watch("groupId", formUpdated);
    $scope.$watch("setId", formUpdated);

    function formUpdated() {
        if ($scope.groupId && $scope.setId) {
            $scope.report = 'loading';

            apiService.getSubmissionsReport($scope.groupId, $scope.setId).then(function(report) {
                $scope.report = report;
            });
        } else {
            $scope.report = 'pending';
        }
    }


})
