angular.module("jsExercises")
.controller("adminSetsController", function($rootScope, $scope, challengeService, $routeParams) {
  $rootScope.openSidebar = false;
  var setId = Number($routeParams.setId);

  function refresh() {
      challengeService.getChallengesGroupedBySet().then(sets => {
          var uncategorized = sets.find(set => set.id === null);
          if (uncategorized) {
               // it always comes sorted to the end. remove so we can add to beginning
              sets.pop();
          } else {
              uncategorized = { id: null, challenges: [] };
          }
          uncategorized.title = "Uncategorized";
          sets.unshift(uncategorized);

          $scope.sets = sets;

          if (setId) {
              $scope.activeSet = sets.find(set => set.id === setId);
          }
          if (!$scope.activeSet) {
              $scope.activeSet = uncategorized;
              setId = null;
          }
          $scope.activeSet.active = true;

          sets.forEach(set => {
              set.dropTarget = !set.active && set !== uncategorized;
          });
      });
  }
  refresh();

  $scope.removeFromSet = function(challenge) {
      challengeService.removeChallengeFromSet(setId, challenge.id).then(refresh);
  }

  var prevDropEl = null, dropEl = null;
  function updateDrop() {
      if (prevDropEl !== dropEl) {
          if (dropEl) {
              angular.element(dropEl).addClass('drop');
          }
          if (prevDropEl) {
              angular.element(prevDropEl).removeClass('drop');
          }
          prevDropEl = dropEl;
      }
  }

  $scope.sortOptions = {
    accept: function (sourceItemHandleScope, destSortableScope, destItemScope) {
        // console.log('accept', [].concat(arguments));
        dropEl = destSortableScope.element[0];

        return true;
    },
    itemMoved: function (event) {
        // console.log('itemM', [].concat(arguments));

        var destSetId = event.dest.sortableScope.set.id;
        var challengeId = event.source.itemScope.challenge.id;

        challengeService.addChallengeToSet(destSetId, challengeId).then(refresh);
    },
    orderChanged: function (event) {
        // console.log('orderCh', [].concat(arguments));

        if (!setId) { // uncategorized
            return;
        }

        var challengeId = event.source.itemScope.challenge.id;
        var position = event.dest.index;
        var insertBeforeChallengeId = null;
        if (position !== $scope.activeSet.challenges.length - 1) {
            // not at end
            insertBeforeChallengeId = $scope.activeSet.challenges[position + 1].id;
        }

        challengeService.repositionChallengeInSet(setId, challengeId, insertBeforeChallengeId).then(refresh);
    },
    dragEnd: function (event) {
        // console.log('dragEnd', [].concat(arguments));
        dropEl = null;
        updateDrop();
    },
    dragCancel: function (event) {
        // console.log('dragCancel', [].concat(arguments));
        dropEl = null;
        updateDrop();
    },
    dragMove: function (event) {
        // console.log('dragMove', [].concat(arguments));
        dropEl = null;
        setTimeout(updateDrop, 0);
    },
    containment: '.edit-sets'
  };
});
