angular.module("jsExercises", ["ngRoute", "ui.bootstrap", "ui.codemirror", "as.sortable"])
.constant("serverUrl", (localStorage && localStorage.jsChallengeApiUrl) || "https://gc-code-challenge.herokuapp.com")
.run(function($rootScope, serverUrl, userService) {
    var redirectUri = encodeURIComponent(serverUrl + "/slack-login");
    var returnUri = encodeURIComponent(location.href);
    $rootScope.slackLoginUrl = "https://slack.com/oauth/authorize?scope=identity.basic,identity.email&client_id=4975543103.166932015414&team_id=T04UPFZ31&redirect_uri=" + redirectUri + "&state=" + returnUri;
    $rootScope.sidebar = {
        keepOpen: false
    };
    $rootScope.enforceAdmin = function() {
        userService.enforceAdmin();
    }
    $rootScope.initController = function() {
        $rootScope.sidebar.keepOpen = false;
        $rootScope.sidebar.type = 'challenges';
    }
    $rootScope.initAdminController = function() {
        userService.enforceAdmin();
        $rootScope.sidebar.keepOpen = false;
        $rootScope.sidebar.type = 'adminNav';
    }
})
.filter('highlightjs', function($sce) {
  return function(input) {
    if (input) return $sce.trustAsHtml( hljs.highlight('js', input).value );
    return input;
  }
})
.filter('highlightjsBlocks', function($sce) {
  return function(input) {
    if (input) {
        var wrapper = document.createElement("div");
        wrapper.innerHTML = input;

        var modified = false;
        var codeBlocks = wrapper.querySelectorAll("pre code");
        for (var i = 0; i < codeBlocks.length; i++) {
            var codeBlock = codeBlocks[i];
            hljs.highlightBlock(codeBlock);
            modified = true;
        }
        if (modified) {
            input = wrapper.innerHTML;
        }
    }
    return $sce.trustAsHtml(input);;
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
