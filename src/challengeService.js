angular.module("jsExercises")
.factory("challengeService", function($http, $q, $sce, challengeData) {

    var basic = highlightCodeInDescriptions(challengeData.basic);
    var basicPromise = $q.resolve(basic);
    var setsCache = { basic: basicPromise };
    var cachedSets;

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

    var challengesService = {
        clearCache: function() {
            setsCache = { basic: basicPromise };
        },
        getSets: function() {
            if (cachedSets === undefined) {
                cachedSets = $http.get("mock-api/sets.json").then(function(response) {
                    return htmlSafeDescriptions(response.data);
                });
            }
            return cachedSets;
        },
        getSet: function(setId) {
            var cached = setsCache[setId];
            if (cached === undefined) {
                setsCache[setId] = cached = $http.get("mock-api/sets/" + encodeURIComponent(setId) + ".json")
                .then(function(response) {
                    var set = response.data;
                    return highlightCodeInDescriptions(set);
                }).catch(function(err) {
                    return basic;
                });
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
    return challengesService;
})
