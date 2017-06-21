angular.module("jsExercises")
.factory("apiService", function($http, serverUrl, userService) {

    var API_URL = serverUrl + "/api";

    var apiService = {
        getSets: function() {
            return get("/sets");
        },
        getSet: function(setKey) {
            return get("/sets/" + encodeURIComponent(setKey));
        },
        getChallengesGroupedBySet: function() {
            return get("/challenges/by-set");
        },
        getChallenge: function(challengeId) {
            return get("/challenges/" + encodeURIComponent(challengeId));
        },
        saveChallenge: function(challenge) {
            if (challenge.id) {
                return put("/challenges/" + encodeURIComponent(challenge.id), challenge);
            } else {
                return post("/challenges", challenge);
            }
        },
        addSubmission: function(submission) {
            return post("/submissions", submission);
        },
        /**
         * Returns a map of challenge ID to status: done or visited. unvisited
         * Items are absent from the map.
         */
        getUserSubmissionStatusesForSet: function(setKey) {
          return get("/sets/" + encodeURIComponent(setKey) + "/my-submission-statuses");
        },
        addChallengeToSet: function(setId, challengeId, insertBeforeChallengeId) {
            return post("/sets/" + encodeURIComponent(setId) + "/challenges", {
                setId: setId,
                challengeId: challengeId,
                insertBeforeChallengeId: insertBeforeChallengeId
            });
        },
        removeChallengeFromSet: function(setId, challengeId) {
            return del("/sets/" + encodeURIComponent(setId) + "/challenges/" + encodeURIComponent(challengeId));
        },
        addSet: function(set) {
            return post("/sets", set);
        },
        updateSet: function(set) {
            return put("/sets/" + encodeURIComponent(set.id), set);
        },
        removeSet: function(setId) {
            return del("/sets/" + encodeURIComponent(setId));
        },
        getGroups: function() {
            return get("/groups");
        },
        getGroup: function(groupId) {
            return get("/groups/" + encodeURIComponent(groupId));
        },
        addGroup: function(group) {
            return post("/groups", group);
        },
        updateGroup: function(group) {
            return put("/groups/" + encodeURIComponent(group.id), group);
        },
        removeGroup: function(groupId) {
            return del("/groups/" + encodeURIComponent(groupId));
        },
        getGroupMembers: function(groupId) {
            return get("/groups/" + encodeURIComponent(groupId) + "/members")
        },
        addGroupMembers: function(groupId, members) {
            return post("/groups/" + encodeURIComponent(groupId) + "/members", members);
        },
        removeGroupMember: function(groupId, memberId) {
            return del("/groups/" + encodeURIComponent(groupId) + "/members/" + encodeURIComponent(memberId));
        },
        getSubmissionsReport: function(groupId, setId) {
            return get("/reports/submissions", { groupId: groupId, setId: setId });
        }
    };

    function get(url, params) {
        return $http({
            method: "get",
            url: API_URL + url,
            headers: { "X-Auth-Token": userService.getAuthToken() },
            params: params
        }).then(responseData);
    }

    function post(url, data) {
        return $http({
            method: "post",
            url: API_URL + url,
            headers: { "X-Auth-Token": userService.getAuthToken() },
            data: data
        }).then(responseData);
    }

    function put(url, data) {
        return $http({
            method: "put",
            url: API_URL + url,
            headers: { "X-Auth-Token": userService.getAuthToken() },
            data: data
        }).then(responseData);
    }

    function del(url) {
        return $http({
            method: "delete",
            url: API_URL + url,
            headers: { "X-Auth-Token": userService.getAuthToken() }
        });
    }

    function responseData(response) {
        return response.data;
    }

    return apiService;
});
