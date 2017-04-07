angular.module("jsExercises")
.factory("challengeService", function($http, $q, $sce, challengeData, apiService, userService) {

    var basic = highlightCodeInDescriptions(challengeData.basic);
    var basicPromise = $q.resolve(basic);
    var setsCache = { basic: basicPromise };
    var cachedSets;

    var challengesService = {
        clearCache: function() {
            setsCache = { basic: basicPromise };
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
        getSet: function(setId) {
            var cached = setsCache[setId];
            if (cached === undefined) {
                if (userService.isLoggedIn()) {
                    cached = apiService.getSet(setId).then(highlightCodeInDescriptions);
                } else {
                    cached = basicPromise;
                }
                setsCache[setId] = cached;
            }
            return cached;
        },
        getChallenges: function(setId) {
            return this.getSet(setId).then(function(set) { return set.challenges; });
        },
        getChallenge: function(setId, number) {
            number = Number(number);
            return this.getChallenges(setId).then(function(challenges) {
                return challenges[number - 1];
            });
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
