angular.module("jsExercises")
.factory("apiService", function($http, serverUrl, userService) {

    var API_URL = serverUrl + "/api";

    var apiService = {
        getSets: function() {
            return $http({
                url: API_URL + "/sets",
                headers: { "X-Auth-Token": userService.getAuthToken() }
            }).then(function(response) {
                return response.data;
            });
        },
        getSet: function(setKey) {
            return $http({
                url: API_URL + "/sets/" + encodeURIComponent(setKey),
                headers: { "X-Auth-Token": userService.getAuthToken() }
            }).then(function(response) {
                return response.data;
            });
        },
        getChallengesGroupedBySet: function() {
            return $http({
                url: API_URL + "/challenges/by-set",
                headers: { "X-Auth-Token": userService.getAuthToken() }
            }).then(function(response) {
                return response.data;
            });
        },
        getChallenge: function(challengeId) {
            return $http({
                url: API_URL + "/challenges/" + encodeURIComponent(challengeId),
                headers: { "X-Auth-Token": userService.getAuthToken() }
            }).then(function(response) {
                return response.data;
            });
        },
        saveChallenge: function(challenge) {
            if (challenge.id) {
                return $http({
                    method: "PUT",
                    url: API_URL + "/challenges/" + encodeURIComponent(challenge.id),
                    data: challenge,
                    headers: { "X-Auth-Token": userService.getAuthToken() }
                }).then(function(response) {
                    return response.data;
                });
            } else {
                return $http({
                    method: "POST",
                    url: API_URL + "/challenges",
                    data: challenge,
                    headers: { "X-Auth-Token": userService.getAuthToken() }
                }).then(function(response) {
                    return response.data;
                });
            }
        },
        addSubmission: function(submission) {
            return $http({
                method: "post",
                url: API_URL + "/submissions",
                headers: { "X-Auth-Token": userService.getAuthToken() },
                data: submission
            }).then(function(response) {
                return response.data;
            });
        },
        /**
         * Returns a map of challenge ID to status: done or visited. unvisited
         * Items are absent from the map.
         */
        getUserSubmissionStatusesForSet: function(setKey) {
          return $http({
              url: API_URL + "/sets/" + encodeURIComponent(setKey) + "/my-submission-statuses",
              headers: { "X-Auth-Token": userService.getAuthToken() }
          }).then(function(response) {
              return response.data;
          });
        },
        addChallengeToSet: function(setId, challengeId, insertBeforeChallengeId) {
            return $http({
                method: "post",
                url: API_URL + "/sets/" + encodeURIComponent(setId) + "/challenges",
                headers: { "X-Auth-Token": userService.getAuthToken() },
                data: {
                    setId: setId,
                    challengeId: challengeId,
                    insertBeforeChallengeId: insertBeforeChallengeId
                }
            });
        },
        removeChallengeFromSet: function(setId, challengeId) {
            return $http({
                method: "delete",
                url: API_URL + "/sets/" + encodeURIComponent(setId) + "/challenges/" + encodeURIComponent(challengeId),
                headers: { "X-Auth-Token": userService.getAuthToken() }
            });
        },
        addSet: function(set) {
            return $http({
                method: "post",
                url: API_URL + "/sets",
                headers: { "X-Auth-Token": userService.getAuthToken() },
                data: set
            }).then(function(response) {
                return response.data;
            });
        },
        updateSet: function(set) {
            return $http({
                method: "put",
                url: API_URL + "/sets/" + encodeURIComponent(set.id),
                headers: { "X-Auth-Token": userService.getAuthToken() },
                data: set
            }).then(function(response) {
                return response.data;
            });
        },
        removeSet: function(setId) {
            return $http({
                method: "delete",
                url: API_URL + "/sets/" + encodeURIComponent(setId),
                headers: { "X-Auth-Token": userService.getAuthToken() }
            });
        },
        getGroups: function() {
            return $http({
                method: "get",
                url: API_URL + "/groups",
                headers: { "X-Auth-Token": userService.getAuthToken() }
            }).then(function(response) {
                return response.data;
            });
        },
        getGroup: function(groupId) {
            return $http({
                method: "get",
                url: API_URL + "/groups/" + encodeURIComponent(groupId),
                headers: { "X-Auth-Token": userService.getAuthToken() }
            }).then(function(response) {
                return response.data;
            });
        },
        addGroup: function(group) {
            return $http({
                method: "post",
                url: API_URL + "/groups",
                headers: { "X-Auth-Token": userService.getAuthToken() },
                data: group
            }).then(function(response) {
                return response.data;
            });
        },
        updateGroup: function(group) {
            return $http({
                method: "put",
                url: API_URL + "/groups/" + encodeURIComponent(group.id),
                headers: { "X-Auth-Token": userService.getAuthToken() },
                data: group
            }).then(function(response) {
                return response.data;
            });
        },
        removeGroup: function(groupId) {
            return $http({
                method: "delete",
                url: API_URL + "/groups/" + encodeURIComponent(groupId),
                headers: { "X-Auth-Token": userService.getAuthToken() }
            });
        },
        getGroupMembers: function(groupId) {
            return $http({
                method: "get",
                url: API_URL + "/groups/" + encodeURIComponent(groupId) + "/members",
                headers: { "X-Auth-Token": userService.getAuthToken() }
            }).then(function(response) {
                return response.data;
            });
        },
        addGroupMembers: function(groupId, members) {
            return $http({
                method: "post",
                url: API_URL + "/groups/" + encodeURIComponent(groupId) + "/members",
                headers: { "X-Auth-Token": userService.getAuthToken() },
                data: members
            });
        },
        removeGroupMember: function(groupId, memberId) {
            return $http({
                method: "delete",
                url: API_URL + "/groups/" + encodeURIComponent(groupId) + "/members/" + encodeURIComponent(memberId),
                headers: { "X-Auth-Token": userService.getAuthToken() }
            });
        }
    };
    return apiService;
});
