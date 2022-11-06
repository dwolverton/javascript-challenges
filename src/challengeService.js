angular.module("jsExercises")
.factory("challengeService", function($rootScope, $http, $q, $sce, challengeData, apiService, userService) {

    var setsCache = {};
    var cachedSets;

    var challengesService = {
        clearCache: function() {
            setsCache = {};
        },
        getSets: function() {
            if (cachedSets === undefined) {
                if (userService.isLoggedIn()) {
                    cachedSets = apiService.getMySets();
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
                    cached = apiService.getSet(setKey);
                } else {
                    cached = $q.resolve(challengeData[setKey]);
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
        getChallengesGroupedBySet: function() {
            return apiService.getChallengesGroupedBySet();
        },
        submit: function(setId, challengeId, code, isPass) {
            return apiService.addSubmission({
                setId: setId,
                challengeId: challengeId,
                code: code,
                status: isPass ? 'pass' : 'fail'
            }).then(function(result) {
              $rootScope.$broadcast("submitSuccess");
              return result;
            });
        },
        getUserSubmissionStatusesForSet: function(setKey) {
            if (userService.isLoggedIn()) {
                return apiService.getUserSubmissionStatusesForSet(setKey);
            } else {
                return $q.resolve({});
            }
        },
        addChallengeToSet: function(setId, challengeId) {
            return apiService.addChallengeToSet(setId, challengeId);
        },
        // leave insertBeforeChallengeId undefined to insert at end
        repositionChallengeInSet: function(setId, challengeId, insertBeforeChallengeId) {
            return apiService.addChallengeToSet(setId, challengeId, insertBeforeChallengeId);
        },
        removeChallengeFromSet: function(setId, challengeId) {
            return apiService.removeChallengeFromSet(setId, challengeId);
        },
        deleteChallenge: function(challengeId) {
            return apiService.deleteChallenge(challengeId);
        },
        addSet: function(set) {
            return apiService.addSet(set);
        },
        updateSet: function(set) {
            return apiService.updateSet(set);
        },
        removeSet: function(setId) {
            return apiService.removeSet(setId);
        }
    };

    function htmlSafeDescriptions(sets) {
        sets.forEach(function(set) {
            set.description = $sce.trustAsHtml(set.description);
        });
        return sets;
    }

    return challengesService;
})
