angular.module("jsExercises")
.controller("adminGroupsController", function($scope, apiService, $location) {
    if (!$scope.enforceAdmin()) {
        return;
    }
    $scope.sidebar.keepOpen = false;

    function refresh() {
        apiService.getGroups().then(function(groups) {
            $scope.groups = groups;
        });
    }
    refresh();

    $scope.addGroup = function() {
        var group = {
            name: "New Group"
        };
        apiService.addGroup(group).then(function(group) {
            $location.path("/admin/groups/" + encodeURIComponent(group.id));
        });
    }
});
