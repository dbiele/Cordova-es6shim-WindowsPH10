// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397705
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
var testinges6shim;
(function (testinges6shim) {
    "use strict";
    var Application;
    (function (Application) {
        function initialize() {
            console.log('adding file to stage 10');
            document.addEventListener('deviceready', onDeviceReady, false);
        }
        Application.initialize = initialize;
        function onDeviceReady() {
            // Handle the Cordova pause and resume events
            document.addEventListener('pause', onPause, false);
            document.addEventListener('resume', onResume, false);
            // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        }
        function onPause() {
            // TODO: This application has been suspended. Save application state here.
        }
        function onResume() {
            // TODO: This application has been reactivated. Restore application state here.
        }
    })(Application = testinges6shim.Application || (testinges6shim.Application = {}));
    window.onload = function () {
        Application.initialize();
    };
})(testinges6shim || (testinges6shim = {}));
//# sourceMappingURL=appBundle.js.map