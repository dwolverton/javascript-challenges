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

  $scope.sortOptions = {

    //restrict move across backlogs. move only within backlog.
    accept: function (sourceItemHandleScope, destSortableScope, destItemScope) {
        console.log('accept', [].concat(arguments));
        return true;
    },
    itemMoved: function (event) {
        console.log('itemM', [].concat(arguments));
    },
    orderChanged: function (event) {
        console.log('orderCh', [].concat(arguments));
    }
  };
});
