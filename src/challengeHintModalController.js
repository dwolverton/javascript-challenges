angular.module("jsExercises")
.controller("challengeHintModalController", function($scope, $location, $uibModalInstance, options) {
    $scope.myCode = options.myCode;
    $scope.solution = options.solution;
    $scope.nextLink  = options.nextLink;
    $scope.status = { hidden: true };

    $scope.close = function() {
        $uibModalInstance.close();
    };
    $scope.next = function() {
        $location.path(nextLink);
    }
});
