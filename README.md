# Cordova-es6shim-WindowsPhone10
Sample code to test if errors appear when using Cordova + ES6-shim on Windows Phone 10 devices.

## Problem ##
When trying to run a Windows Phone 10 app using es6-shim.js, I get errors that prevent the app from running.   

## How do I know there's a problem? ##
JavaScript errors appear when running on a Windows Phone 10 device?

    SCRIPT5007: Unhandled exception at line 221, column 7 in ms-appx-web://test/www/scripts/lib/es6-shim/es6-shim.js 
    0x800a138f - JavaScript runtime error: Unable to get property 'toString' of undefined or null reference
    es6-shim.js (221,7)

or

    'WWAHost.exe' (Script): Loaded 'Script Code (MSAppHost/3.0)'. 
    Exception was thrown at line 686, column 7 in ms-appx-web://testing/www/scripts/es6-shim/es6-shim.js
    0x800a138d - JavaScript runtime error: String.prototype.startsWith: 'this' is not a String object
    Exception was thrown at line 1093, column 9 in ms-appx-web://testing/www/scripts/es6-shim/es6-shim.js


## Code ##

This project was created using Visual Studio 2015 community.  However, any IDE or command line (cordova build) tool can build this project. 
