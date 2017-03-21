angular.module("jsExercises", ["ngRoute"])
.controller("challengeListController", function($scope, $rootScope, $routeParams, challengeService) {

    $scope.$on("$routeChangeSuccess", loadChallenges);

    function loadChallenges() {
        $scope.challengeSetId = $routeParams.challengeSetId;

        var count = 0;
        $scope.challenges = challengeService.getChallenges($routeParams.challengeSetId).map(function(challenge) {
            var decorated = {
                status: count < 2 ? 'done' : count < 5 ? 'visited' : 'unvisited',
                challenge: challenge
            };
            count++;
            if (count === Number($routeParams.challengeNumber)) {
                decorated.current = true;
            }
            return decorated;
        });
    }
})
.controller("challengeController", function($scope, $routeParams, $sce, challengeService, testService) {
    var challenge = challengeService.getChallenge($routeParams.challengeSetId, $routeParams.challengeNumber);

    $scope.title = challenge.title;
    $scope.challengeDescriptionHtml = $sce.trustAsHtml(challenge.description);
    $scope.code = challenge.starterCode;

    $scope.testCaseResults = [];

    $scope.$watch('code', function(code) {
        testService.runTestCases(challenge.testCases, code).then(function (testResults) {
            $scope.testCaseResults = testResults;
            $scope.overallResult = testResults.reduce(function(prev, test) {
                if (test.result.status === 'error') {
                    return 'error';
                } else if (test.result.status === 'fail' && prev !== 'error') {
                    return 'fail';
                } else {
                    return prev;
                }
            }, 'pass');
            console.log("or", $scope.overallResult);
        });
    });
})
.filter('highlightjs', function($sce) {
  return function(input) {
    if (input) return $sce.trustAsHtml( hljs.highlight('js', input).value );
    return input;
  }
});
