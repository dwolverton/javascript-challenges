angular.module("jsExercises", ["ngRoute"])
.controller("challengeListController", function($scope, $rootScope, $routeParams, challengeService) {

    $scope.$on("$routeChangeSuccess", loadChallenges);

    function loadChallenges() {
        $scope.challengeSetId = $routeParams.challengeSetId;
        $scope.challenges = challengeService.getChallenges($routeParams.challengeSetId);
    }
})
.controller("challengeController", function($scope, $routeParams, $sce, challengeService, testService) {
    var challenge = challengeService.getChallenge($routeParams.challengeSetId, $routeParams.challengeNumber);

    $scope.challengeDescriptionHtml = $sce.trustAsHtml(challenge.description);
    $scope.code = challenge.starterCode;

    $scope.testCaseResults = [];

    $scope.$watch('code', function(code) {
        testService.runTestCases(challenge.testCases, code).then(function (testResults) {
            $scope.testCaseResults = testResults;
        });
    });
});
