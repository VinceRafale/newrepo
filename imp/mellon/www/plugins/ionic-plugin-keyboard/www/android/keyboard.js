cordova.define("ionic-plugin-keyboard.keyboard",function(o,e,i){var r=(o("cordova/argscheck"),o("cordova/utils"),o("cordova/exec")),n=o("cordova/channel"),a=function(){};a.hideKeyboardAccessoryBar=function(o){r(null,null,"Keyboard","hideKeyboardAccessoryBar",[o])},a.close=function(){r(null,null,"Keyboard","close",[])},a.show=function(){r(null,null,"Keyboard","show",[])},a.disableScroll=function(o){r(null,null,"Keyboard","disableScroll",[o])},a.isVisible=!1,n.onCordovaReady.subscribe(function(){function o(o){var e=o.charAt(0);if("S"===e){var i=o.substr(1);cordova.plugins.Keyboard.isVisible=!0,cordova.fireWindowEvent("native.keyboardshow",{keyboardHeight:+i}),cordova.fireWindowEvent("native.showkeyboard",{keyboardHeight:+i})}else"H"===e&&(cordova.plugins.Keyboard.isVisible=!1,cordova.fireWindowEvent("native.keyboardhide"),cordova.fireWindowEvent("native.hidekeyboard"))}r(o,null,"Keyboard","init",[])}),i.exports=a});