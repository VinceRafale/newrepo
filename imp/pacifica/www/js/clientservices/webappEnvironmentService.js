var servicesModule=angular.module("webappEnvironmentService",[]);servicesModule.factory("Environment",["$rootScope","$translate",function(){var n={serverURL:"/app",websocketURL:"wss://"+window.location.host.indexOf("www.thinkpacifica.com")<0},e={appVersion:"0.0.1"};return n.isOnline=function(){return!0},n.isDebug=function(){return window.location.host.indexOf("www.thinkpacifica.com")<0},n.isWeb=function(){return!0},n.isDevelopment=function(){return window.location.host.indexOf("www.thinkpacifica.com")<0},n.isStorageAllowed=function(){return!1},n.getAppVersion=function(){return e.appVersion},n.getGATrackingCode=function(){return n.gaTrackingCode},n}]);