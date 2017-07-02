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

    // - Sets --
    $scope.sets = {};
    function refreshSets() {
        Promise.all([
            apiService.getSets(),
            apiService.getGroupSets(groupId)
        ]).then(function(values) {
            $scope.$apply(function() {
                var availableSets = values[0];
                var sets = values[1];

                availableSets = availableSets.filter(function(set) {
                    return !sets.some(function(selectedSet) { return selectedSet.id === set.id });
                });

                $scope.sets.selected = sets;
                $scope.sets.available = availableSets;
            });
        });
    }
    refreshSets();

    $scope.setSortOptions = {
      itemMoved: function (event) { // from here
          var setId = event.source.itemScope.set.id;
          apiService.removeSetFromGroup(groupId, setId).then(refreshSets);
      },
      orderChanged: addSetAtPosition,
      containment: '.edit-group__sets'
    };

    $scope.availableSetSortOptions = {
      accept: function (sourceItemHandleScope, destSortableScope) {
          // Cannot reorder the available sets.
          return sourceItemHandleScope.sortableScope !== destSortableScope;
      },
      itemMoved: addSetAtPosition, // from here
      containment: '.edit-group__sets'
    };

    function addSetAtPosition(event) {
        var setId = event.source.itemScope.set.id;
        var position = event.dest.index;
        var insertBeforeSetId = null;
        if (position !== $scope.sets.selected.length - 1) {
            // not at end
            insertBeforeSetId = $scope.sets.selected[position + 1].id;
        }
        apiService.addSetToGroup(groupId, setId, insertBeforeSetId).then(refreshSets);
    }
});
