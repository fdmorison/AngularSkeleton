angular.module('UI', ['dialog'])

.factory('UI', function($q, Dialog) {

    return({

        /**
         * Shows a general message.
         *
         * @param message The content of the message
         * @param title The message title
         * @param callback Called when the OK button is pressed
         */
        showMessage: function(message, title, callback) {
            Dialog.open(message, {
                title: title,
                callback: callback
            });
        },

        /**
         * Shows a success message.
         *
         * @param message The content of the message
         * @param title The message title
         * @param callback Called when the OK button is pressed
         */
        showSuccess: function(message, title, callback) {
            Dialog.open(message, {
                type: Dialog.SUCCESS,
                title: title,
                callback: callback
            });
        },

        /**
         * Shows a warning message.
         *
         * @param message The content of the message
         * @param title The message title
         * @param callback Called when the OK button is pressed
         */
        showWarn: function(message, title, callback) {
            Dialog.open(message, {
                type: Dialog.WARN,
                title: title,
                callback: callback
            });
        },

        /**
         * Shows an error message.
         *
         * @param message The content of the message
         * @param title The message title
         * @param callback Called when the OK button is pressed
         */
        showError: function(message, title, callback) {
            Dialog.open(message, {
                type: Dialog.ERROR,
                title: title,
                callback: callback
            });
        },

        /**
         * Shows a help message.
         *
         * @param message The content of the message
         * @param title The message title
         * @param callback Called when the OK button is pressed
         */
        showHelp: function(message, title, callback) {
            Dialog.open(message, {
                type: Dialog.HELP,
                title: title,
                callback: callback
            });
        },

        /**
         * Shows a confirm box that triggers a negative or positive action.
         *
         * @param message The content of the message
         * @param title The message title
         * 
         * @returns Promise that will be resolved on confirmation or rejected on cancellation.
         */
        showConfirm: function(message, title) {

            var deferred = $q.defer();

            Dialog.open(message, {
                type : Dialog.INFO,
                title: title,
                actions: [
                    {label: "Confirm", callback: deferred.resolve},
                    {label: "Cancel" , callback: deferred.reject}
                ]
            });

            return deferred.promise;

        },

    });

})