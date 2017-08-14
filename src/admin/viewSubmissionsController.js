angular.module('jsExercises')
.controller('viewSubmissionsController', function($scope, apiService) {
    $scope.initAdminController();
    $scope.startDate = null;
    $scope.startTime = midnight();
    $scope.endDate = null;
    $scope.endTime = midnight();

    apiService.getGroups().then(function(groups) {
        $scope.groups = groups;
    });
    apiService.getSets().then(function(sets) {
        $scope.sets = sets;
    });

    $scope.$watch("groupId", formUpdated);
    $scope.$watch("setId", formUpdated);
    $scope.$watch("startDate", formUpdated);
    $scope.$watch("startTime", formUpdated);
    $scope.$watch("endDate", formUpdated);
    $scope.$watch("endTime", formUpdated);

    function formUpdated() {
        if ($scope.groupId && $scope.setId) {
            $scope.report = 'loading';

            apiService.getSubmissionsReport($scope.groupId,
                                            $scope.setId,
                                            combineDateAndTime($scope.startDate, $scope.startTime),
                                            combineDateAndTime($scope.endDate, $scope.endTime)
            ).then(function(report) {
                $scope.report = report;
            });
        } else {
            $scope.report = 'pending';
        }
    }

    function midnight() {
        return new Date(1970, 0, 1, 0, 0, 0);
    }

    function combineDateAndTime(date, time) {
        if (!date) {
            return null;
        } else {
            var combined = new Date(date.getTime());
            combined.setHours(time.getHours());
            combined.setMinutes(time.getMinutes());
            combined.setSeconds(time.getSeconds());
            combined.setMilliseconds(0);
            return combined;
        }
    }


})
