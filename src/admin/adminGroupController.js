angular.module("jsExercises")
.controller("adminGroupController", function($scope, $rootScope, userService, apiService, $routeParams, $location) {
    if (!userService.enforceAdmin()) {
        return;
    }
    $rootScope.openSidebar = false;

    apiService.getGroup(parseInt($routeParams.groupId)).then(function(group) {
        $scope.group = group;
    });

    $scope.updateGroup = function(group) {
        apiService.updateGroup(group).then(goBack);
    }

    $scope.removeGroup = function(group) {
        apiService.removeGroup(group.id).then(goBack);
    }

    function goBack() {
        $location.path("/admin/groups");
    }
});
