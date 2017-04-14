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
        }
    };
    return apiService;
});
