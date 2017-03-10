angular.module("jsExercises")
.factory("challengeService", function(challengeData) {

    var challenges = challengeData.basic;

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
