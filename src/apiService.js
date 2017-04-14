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
        getSet: function(setId) {
            return $http({
                url: API_URL + "/sets/" + encodeURIComponent(setId),
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
        }
    };
    return apiService;
});
