cordova.define("cordova-plugin-statusbar.statusbar",function(t,l,n){var a=t("cordova/exec"),e={black:"#000000",darkGray:"#A9A9A9",lightGray:"#D3D3D3",white:"#FFFFFF",gray:"#808080",red:"#FF0000",green:"#00FF00",blue:"#0000FF",cyan:"#00FFFF",yellow:"#FFFF00",magenta:"#FF00FF",orange:"#FFA500",purple:"#800080",brown:"#A52A2A"},u={isVisible:!0,overlaysWebView:function(t){a(null,null,"StatusBar","overlaysWebView",[t])},styleDefault:function(){a(null,null,"StatusBar","styleDefault",[])},styleLightContent:function(){a(null,null,"StatusBar","styleLightContent",[])},styleBlackTranslucent:function(){a(null,null,"StatusBar","styleBlackTranslucent",[])},styleBlackOpaque:function(){a(null,null,"StatusBar","styleBlackOpaque",[])},backgroundColorByName:function(t){return u.backgroundColorByHexString(e[t])},backgroundColorByHexString:function(t){if("#"!==t.charAt(0)&&(t="#"+t),4===t.length){var l=t.split("");t="#"+l[1]+l[1]+l[2]+l[2]+l[3]+l[3]}a(null,null,"StatusBar","backgroundColorByHexString",[t])},hide:function(){a(null,null,"StatusBar","hide",[]),u.isVisible=!1},show:function(){a(null,null,"StatusBar","show",[]),u.isVisible=!0}};window.setTimeout(function(){a(function(t){"object"==typeof t?"tap"==t.type&&cordova.fireWindowEvent("statusTap"):u.isVisible=t},null,"StatusBar","_ready",[])},0),n.exports=u});