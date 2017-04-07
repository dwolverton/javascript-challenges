angular.module("jsExercises")
.factory("apiService", function($http, serverUrl, userService) {

    var API_URL = serverUrl + "/api";

    var apiService = {
        getSets: function() {
            return $http({
                url: API_URL + "/sets",
                params: { auth_token: userService.getAuthToken() }
            }).then(function(response) {
                return response.data;
            });
        },
        getSet: function(setId) {
            return $http({
                url: API_URL + "/sets/" + encodeURIComponent(setId),
                params: { auth_token: userService.getAuthToken() }
            }).then(function(response) {
                return response.data;
            });
        }
    };
    return apiService;
});
