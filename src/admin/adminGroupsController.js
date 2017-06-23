angular.module("jsExercises")
.controller("adminGroupsController", function($scope, apiService, $location) {
    $scope.initAdminController();

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
