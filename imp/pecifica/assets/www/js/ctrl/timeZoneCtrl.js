var ctrl=angular.module("timeZoneCtrl",[]);ctrl.controller("TimeZoneCtrl",["$scope","$state","$http","$timeout","$analytics","$ionicLoading","$ionicPopup","AccountService","HabitsService","GoalsService","AudioService","PayService","Environment","Token",function(e,r,t,n,i,o,c,a){e.data={timeZone:""};var m=a.getUserPreference("preferred_timezone");m&&(timeZone=m),e.getUserTimeZone=function(){return a.getUserTimeZone()},e.updateTimeZone=function(){""===e.data.timeZone?a.clearUserPreference("preferred_timezone"):a.setUserPreference("preferred_timezone",e.data.timeZone)}}]);