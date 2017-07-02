angular.module("jsExercises")
.controller("adminChallengeController", function($scope, $location, challenge, testService, apiService) {
  $scope.initAdminController();
  $scope.challenge = challenge;
  addTestTypes();
  $scope.readyToSave = false;


  $scope.addTestCase = function() {
      $scope.challenge.testCases.push({
          type: "result"
      });
  }
  $scope.removeTestCase = function(i) {
    $scope.challenge.testCases.splice(i, 1);
  }

  $scope.preview = function() {
      $scope.challengeForm.$setPristine();
      $scope.challenge.starterCode = $scope.challenge.starterCode || "";
      var code = $scope.challenge.solution;
      var testCases = $scope.challenge.testCases;

      testCases.forEach(function(testCase) {
          if (testCase.type === 'result') {
              testCase.result = 0;
              delete testCase.console;
          } else {
              testCase.console = [];
              delete testCase.result;
          }
      });

      testService.runTestCases(testCases, code).then(function (testResults) {
          $scope.testCaseResults = testResults;
          // Update expected result or console to match the solution.
          $scope.testCaseResults.forEach(function(test) {
            if (test.case.type === 'result') {
                test.case.result = test.result.expressionResult;
            } else {
                test.case.console = test.result.console;
            }
            if (test.result.status === 'fail' && test.case.expressionDisplay !== 'Code Quality Check') {
                test.result.status = 'pass';
            }
          });
          setTimeout(function() {
              $scope.readyToSave = true;
              $scope.$digest();
          }, 0);
      });
  };

  $scope.save = function() {
      var challenge = $scope.challenge;
      $scope.challenge = null;
      removeTestTypes(challenge);
      apiService.saveChallenge(challenge).then(function(savedChallenge) {
          if (!challenge.id) {
            $location.path("/admin/challenge/" + encodeURIComponent(savedChallenge.id));
          } else {
            $scope.challenge = savedChallenge;
            addTestTypes();
          }
      });
  };

  $scope.$watch('challenge', function() {
      $scope.readyToSave = false;
  }, true);

  function addTestTypes() {
    $scope.challenge.testCases.forEach(function(test) {
      test.type = test.console ? "console" : "result";
    });
  }
  function removeTestTypes(challenge) {
    challenge.testCases.forEach(function(test) {
        delete test.type;
    });
  }
});
