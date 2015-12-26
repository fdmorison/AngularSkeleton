angular.module('UI', ['dialog'])

.factory('UI', function(Dialog) {

    return({

        /**
         * Shows a general message.
         *
         * @param message The content of the message
         * @param title The message title
         * @param callback Called when the OK button is pressed
         */
        showMessage: function(message, title, callback) {
            Dialog.open(title, message, "info", callback);
        },

        /**
         * Shows a success message.
         *
         * @param message The content of the message
         * @param title The message title
         * @param callback Called when the OK button is pressed
         */
        showSuccess: function(message, title, callback) {
            Dialog.open(title || "Success", message, "success", callback);
        },

        /**
         * Shows a warning message.
         *
         * @param message The content of the message
         * @param title The message title
         * @param callback Called when the OK button is pressed
         */
        showWarn: function(message, title, callback) {
            Dialog.open(title || "Warn", message, "warn", callback);
        },

        /**
         * Shows an error message.
         *
         * @param message The content of the message
         * @param title The message title
         * @param callback Called when the OK button is pressed
         */
        showError: function(message, title, callback) {
            Dialog.open(title || "Error", message, "error", callback);
        },

        /**
         * Shows a help message.
         *
         * @param message The content of the message
         * @param title The message title
         * @param callback Called when the OK button is pressed
         */
        showHelp: function(message, title, callback) {
            Dialog.open(title || "Help", message, "help", callback);
        }

    });

})