var ctrl=angular.module("notificationCtrl",[]);ctrl.controller("NotificationCtrl",["$scope","$state","$http","$timeout","$analytics","$ionicLoading","$ionicPopup","AccountService","HabitsService","GoalsService","AudioService","PayService","NotificationService","Environment","Token",function(e,t,i,o,n,a,c,r,s,f,d,u,l){e.notificationsUpdated=!1,e.receiveEmailsUpdated=!1,e.data={},e.data.notifications=r.getUserPreference("notification_timing"),"undefined"==typeof e.data.notifications&&(e.data.notifications="random");var m=r.getUserPreference("eod_notifications");e.data.receiveEODNotifications=m?""+("true"==m.toLowerCase()):"true";var p=r.getUserPreference("receive_emails");e.data.receiveEmails=p?""+("true"==p.toLowerCase()):"true";var v=r.getUserPreference("play_goal_alert");e.data.goalAlert=v?""+("true"==v.toLowerCase()):"true";var U=r.getUserPreference("receive_community_notifications");e.data.communityNotification=U?""+("true"==U.toLowerCase()):"true",e.updateReceiveEmails=function(){r.setUserPreference("receive_emails",""+e.data.receiveEmails).success(function(){e.receiveEmailsUpdated=!0,o(function(){e.receiveEmailsUpdated=!1},3e3)})},e.updateEODNotifications=function(){r.setUserPreference("eod_notifications",e.data.receiveEODNotifications).success(function(){e.notificationsUpdated=!0,o(function(){e.notificationsUpdated=!1},3e3)})},e.updateNotifications=function(){r.setUserPreference("notification_timing",e.data.notifications).success(function(){e.notificationsUpdated=!0,o(function(){e.notificationsUpdated=!1},3e3)}),"none"!=e.data.notifications&&l.registerNotifications()},e.updateGoalAlert=function(){r.setUserPreference("play_goal_alert",e.data.goalAlert).success(function(){e.goalAlertUpdated=!0,o(function(){e.goalAlertUpdated=!1},3e3)})},e.updateCommunityNotifications=function(){r.setUserPreference("receive_community_notifications",e.data.communityNotification).success(function(){e.communityNotificationUpdated=!0,o(function(){e.communityNotificationUpdated=!1},3e3)})}}]);