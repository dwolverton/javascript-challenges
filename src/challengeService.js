angular.module("jsExercises")
.factory("challengeService", function(mock) {

    var challenges = [
        mock.challenge,
        mock.challenge2
    ];

    return {
        challengeOne: mock.challenge,
        getChallenges: function(setId) {
            return challenges;
        },
        getChallenge: function(setId, number) {
            number = Number(number);
            return challenges[number - 1];
        }
    };
})
