angular.module("jsExercises")
.controller("adminGroupController", function($scope, apiService, $routeParams, $location, parseMembers) {
    $scope.initAdminController();
    var groupId = parseInt($routeParams.groupId);

    // -- Group Details --
    apiService.getGroup(groupId).then(function(group) {
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

    // -- Members --
    function refreshMembers() {
        apiService.getGroupMembers(groupId).then(function(members) {
            $scope.members = members;
        });
    }
    refreshMembers();

    $scope.addMembers = function(inputString) {
        var newMembers = parseMembers(inputString);
        apiService.addGroupMembers(groupId, newMembers).then(refreshMembers);
        $scope.membersToAdd = "";
    }

    $scope.removeMember = function(member) {
        apiService.removeGroupMember(groupId, member.id).then(refreshMembers);
    }
});
