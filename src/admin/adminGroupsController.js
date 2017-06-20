angular.module("jsExercises")
.controller("adminGroupsController", function($scope, $rootScope, userService, apiService, $location) {
    if (!userService.enforceAdmin()) {
        return;
    }
    $rootScope.openSidebar = false;

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
