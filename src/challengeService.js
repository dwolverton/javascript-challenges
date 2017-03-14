angular.module("jsExercises")
.factory("challengeService", function(challengeData) {

    var challenges = challengeData.basic;
    challenges.forEach(function(challenge) {
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

    return {
        getChallenges: function(setId) {
            return challenges;
        },
        getChallenge: function(setId, number) {
            number = Number(number);
            return challenges[number - 1];
        }
    };
})
