angular.module("jsExercises")
.controller("adminSetsController", function($rootScope, $scope) {
  $rootScope.openSidebar = false;

  $scope.sets = [
      { id: "uncategorized", title: "Uncategorized", challenges: [], active: true},
      { id: 1, title: "Basic Challenges", challenges: []},
      { id: 2, title: "Loops", challenges: []},
  ];

  $scope.challenges = [
      { id: 1, title: "Count from 0 to 4" },
      { id: 2, title: "Count from 1 to 5" },
      { id: 3, title: "Proceed to the tree" }
  ];






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
