angular.module("jsExercises")
.factory("preferenceService", function() {
    var DEFAULT = {
        autoRun: false
    };

    return {
        read: function() {
            var prefs = null;
            try {
                prefs = localStorage.preferences;
                if (prefs) {
                    prefs = JSON.parse(prefs);
                }
            } catch(e) {
                // if parse failure, use default props
            }
            if (!prefs || !(typeof prefs === 'object')) {
                prefs = DEFAULT;
            }
            return prefs;
        },
        write: function(prefs) {
            localStorage.preferences = JSON.stringify(prefs);
        }
    };
});
