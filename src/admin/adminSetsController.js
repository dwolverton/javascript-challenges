angular.module("jsExercises")
.controller("adminSetsController", function($rootScope, $scope, challengeService, $routeParams) {
  $rootScope.openSidebar = false;
  var setId = Number($routeParams.setId);

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






  var prevDropEl = null, dropEl = null;
  function updateDrop() {
      console.log('updateDrop');
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

    //restrict move across backlogs. move only within backlog.
    accept: function (sourceItemHandleScope, destSortableScope, destItemScope) {
        console.log('accept', [].concat(arguments));
        dropEl = destSortableScope.element[0];

        return true;
    },
    itemMoved: function (event) {
        console.log('itemM', [].concat(arguments));
    },
    orderChanged: function (event) {
        console.log('orderCh', [].concat(arguments));
    },
    dragEnd: function (event) {
        console.log('dragEnd', [].concat(arguments));
        dropEl = null;
        updateDrop();
    },
    dragCancel: function (event) {
        console.log('dragCancel', [].concat(arguments));
        dropEl = null;
        updateDrop();
    },
    dragMove: function (event) {
        console.log('dragMove', [].concat(arguments));
        dropEl = null;
        setTimeout(updateDrop, 0);
    },
    containment: '.edit-sets'
  };
});
