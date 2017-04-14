angular.module("jsExercises")
.factory("challengeService", function($http, $q, $sce, challengeData, apiService, userService) {

    var basic = highlightCodeInDescriptions(challengeData.basic);
    var basicPromise = $q.resolve(basic);
    var setsCache = {};
    var cachedSets;

    var challengesService = {
        clearCache: function() {
            setsCache = {};
        },
        getSets: function() {
            if (cachedSets === undefined) {
                if (userService.isLoggedIn()) {
                    cachedSets = apiService.getSets();
                } else {
                    cachedSets = $q.resolve(challengeData._sets);
                }
                cachedSets = cachedSets.then(htmlSafeDescriptions);
            }
            return cachedSets;
        },
        getSet: function(setKey) {
            var cached = setsCache[setKey];
            if (cached === undefined) {
                if (userService.isLoggedIn()) {
                    cached = apiService.getSet(setKey).then(highlightCodeInDescriptions);
                } else {
                    cached = basicPromise;
                }
                setsCache[setKey] = cached;
            }
            return cached;
        },
        getChallenges: function(setKey) {
            return this.getSet(setKey).then(function(set) { return set.challenges; });
        },
        getChallenge: function(setKey, number) {
            number = Number(number);
            return this.getChallenges(setKey).then(function(challenges) {
                return challenges[number - 1];
            });
        },
        submit: function(setId, challengeId, code, isPass) {
            return apiService.addSubmission({
                setId: setId,
                challengeId: challengeId,
                code: code,
                status: isPass ? 'pass' : 'fail'
            });
        },
        getUserSubmissionStatusesForSet: function(setKey) {
          if (userService.isLoggedIn()) {
              return apiService.getUserSubmissionStatusesForSet(setKey);
          } else {
              return $q.resolve({});
          }
        }
    };

    function highlightCodeInDescriptions(set) {
        set.challenges.forEach(function(challenge) {
            if (challenge.description) {
                var wrapper = document.createElement("div");
                wrapper.innerHTML = challenge.description;

                var modified = false;
                wrapper.querySelectorAll("pre code").forEach(function(codeBlock) {
                    hljs.highlightBlock(codeBlock);
                    modified = true;
                });
                if (modified) {
                    challenge.description = wrapper.innerHTML;
                }
            }
        });
        return set;
    }

    function htmlSafeDescriptions(sets) {
        sets.forEach(function(set) {
            set.description = $sce.trustAsHtml(set.description);
        });
        return sets;
    }

    return challengesService;
})
