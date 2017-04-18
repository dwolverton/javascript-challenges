(function() {
// This is used to prevent flashing of status indicators when switching challenges.
var lastChallengeStatuses = {};

angular.module("jsExercises")
.controller("challengeListController", function($scope, $rootScope, $routeParams, challengeService, userService) {
    $scope.$on("$routeChangeSuccess", loadChallenges);
    $scope.$on("submitSuccess", loadChallengeStatuses);

    $scope.logOut = userService.logOut;

    function loadChallenges() {
        $scope.challengeSetKey = $routeParams.challengeSetKey;
        $scope.challengeStatuses = lastChallengeStatuses;

        if ($scope.challengeSetKey) {
            challengeService.getSet($scope.challengeSetKey).then(function(set) {
                $scope.setTitle = set.title;
                $scope.challenges = set.challenges.map(function(challenge) {
                    var decorated = {
                        getStatus: function() {
                          return $scope.challengeStatuses[this.challenge.id] || 'unvisited';
                        },
                        challenge: challenge
                    };
                    return decorated;
                });
                var challengeNumber = Number($routeParams.challengeNumber);
                if (challengeNumber) {
                    $scope.challenges[challengeNumber - 1].current = true;
                }
            });
        } else {
            $scope.setTitle = null;
            $scope.challenges = null;
        }
        loadChallengeStatuses();
    }

    function loadChallengeStatuses() {
      if ($routeParams.challengeSetKey) {
        challengeService.getUserSubmissionStatusesForSet($routeParams.challengeSetKey).then(function(challengeStatuses) {
          $scope.challengeStatuses = lastChallengeStatuses = challengeStatuses;
        });
      } else {
        $scope.challengeStatuses = lastChallengeStatuses = {};
      }
    }
})
})();
