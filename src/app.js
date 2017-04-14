angular.module("jsExercises", ["ngRoute", "ui.codemirror"])
.constant("serverUrl", "http://localhost:5000")
.run(function($rootScope, serverUrl) {
    var redirectUri = encodeURIComponent(serverUrl + "/slack-login");
    var returnUri = encodeURIComponent(location.href);
    $rootScope.slackLoginUrl = "https://slack.com/oauth/authorize?scope=identity.basic,identity.email&client_id=4975543103.166932015414&team_id=T04UPFZ31&redirect_uri=" + redirectUri + "&state=" + returnUri;
})
.controller("setsController", function($rootScope, $scope, challengeService) {
    $rootScope.openSidebar = true;
    challengeService.getSets().then(function(sets) {
        $scope.sets = sets;
    });
})
.filter('highlightjs', function($sce) {
  return function(input) {
    if (input) return $sce.trustAsHtml( hljs.highlight('js', input).value );
    return input;
  }
})
/**
 * wrap a function that has asynchronous components so that it will only run
 * once at a time. The function is passed a `done` function as the first
 * parameter, which it must call when all async processing is complete.
 */
.factory('serialize', function() {
    return function(fn) {
        var queued;
        var running = false;

        function run(args) {
            running = true;
            args = [done].concat(Array.prototype.slice.call(args));
            fn.apply(this, args);
        }

        function done() {
            running = false;
            if (queued) {
                run(queued);
                queued = null;
            }
        }

        return function() {
            if (running) {
                queued = arguments;
            } else {
                run(arguments);
            }
        }
    }
});
