angular.module("underscore",[]).factory("_",function(){return window._}),angular.module("your_app_name",["ionic","your_app_name.tracking","your_app_name.directives","your_app_name.controllers","your_app_name.views","underscore"]).run(["$ionicPlatform",function(e){e.ready(function(){window.cordova&&window.cordova.plugins.Keyboard&&cordova.plugins.Keyboard.hideKeyboardAccessoryBar(!0),window.StatusBar&&StatusBar.styleDefault()})}]).config(["$stateProvider","$urlRouterProvider",function(e,n){e.state("facebook-sign-in",{url:"/facebook-sign-in",templateUrl:"views/auth/facebook-sign-in.html",controller:"WelcomeCtrl"}).state("dont-have-facebook",{url:"/dont-have-facebook",templateUrl:"views/auth/dont-have-facebook.html",controller:"WelcomeCtrl"}).state("create-account",{url:"/create-account",templateUrl:"views/auth/create-account.html",controller:"CreateAccountCtrl"}).state("welcome-back",{url:"/welcome-back",templateUrl:"views/auth/welcome-back.html",controller:"WelcomeBackCtrl"}).state("app",{url:"/app","abstract":!0,templateUrl:"views/app/side-menu.html",controller:"AppCtrl"}).state("app.home",{url:"/home",views:{menuContent:{templateUrl:"views/app/home.html",controller:"HomeCtrl"}}}),n.otherwise("/facebook-sign-in")}]),angular.module("your_app_name.controllers",[]).controller("AppCtrl",["$scope",function(e){}]).controller("HomeCtrl",["$scope","$ionicActionSheet","$state",function(e,n,o){e.showLogOutMenu=function(){n.show({destructiveText:"Logout",titleText:"Are you sure you want to logout? This app is awsome so I recommend you to stay.",cancelText:"Cancel",cancel:function(){},buttonClicked:function(e){return!0},destructiveButtonClicked:function(){o.go("facebook-sign-in")}})}}]).controller("WelcomeCtrl",["$scope","$ionicModal","$state",function(e,n,o){e.bgs=["http://lorempixel.com/640/1136","https://dl.dropboxusercontent.com/u/30873364/envato/ionFB/ion-fb-feed.gif"],e.facebookSignIn=function(){console.log("doing facebbok sign in"),o.go("app.home")},n.fromTemplateUrl("views/partials/privacy-policy.html",{scope:e,animation:"slide-in-up"}).then(function(n){e.privacy_policy_modal=n}),n.fromTemplateUrl("views/partials/terms-of-service.html",{scope:e,animation:"slide-in-up"}).then(function(n){e.terms_of_service_modal=n}),e.showPrivacyPolicy=function(){e.privacy_policy_modal.show()},e.showTerms=function(){e.terms_of_service_modal.show()}}]).controller("CreateAccountCtrl",["$scope","$state",function(e,n){e.doSignUp=function(){console.log("doing sign up"),n.go("app.home")}}]).controller("WelcomeBackCtrl",["$scope","$ionicModal","$state",function(e,n,o){e.doLogIn=function(){console.log("doing log in"),o.go("app.home")},n.fromTemplateUrl("views/partials/forgot-password.html",{scope:e,animation:"slide-in-up"}).then(function(n){e.forgot_password_modal=n}),e.showForgotPassword=function(){e.forgot_password_modal.show()},e.requestNewPassword=function(){console.log("requesting new password"),o.go("app.home")}}]),angular.module("your_app_name.directives",[]).directive("multiBg",["_",function(e){return{scope:{multiBg:"=",interval:"=",helperClass:"@"},controller:["$scope","$element","$attrs",function(n,o,t){n.loaded=!1;var i=this;this.animateBg=function(){n.$apply(function(){n.loaded=!0,o.css({"background-image":"url("+n.bg_img+")"})})},this.setBackground=function(e){n.bg_img=e},e.isUndefined(n.multiBg)||i.setBackground(e.isArray(n.multiBg)&&n.multiBg.length>1&&!e.isUndefined(n.interval)&&e.isNumber(n.interval)?n.multiBg[0]:n.multiBg[0])}],templateUrl:"views/templates/misc/multi-bg.html",restrict:"A",replace:!0,transclude:!0}}]).directive("bg",function(){return{restrict:"A",require:"^multiBg",scope:{ngSrc:"@"},link:function(e,n,o,t){n.on("load",function(){t.animateBg()})}}}).directive("showHideContainer",function(){return{scope:{},controller:["$scope","$element","$attrs",function(e,n,o){e.show=!1,e.toggleType=function(n){n.stopPropagation(),n.preventDefault(),e.show=!e.show,e.$broadcast("toggle-type",e.show)}}],templateUrl:"views/templates/misc/show-hide-password.html",restrict:"A",replace:!1,transclude:!0}}).directive("showHideInput",function(){return{scope:{},link:function(e,n,o){e.$on("toggle-type",function(e,o){{var t=n[0];t.getAttribute("type")}o||t.setAttribute("type","password"),o&&t.setAttribute("type","text")})},require:"^showHideContainer",restrict:"A",replace:!1,transclude:!1}}),angular.module("your_app_name.views",[]).run(["$templateCache",function(e){e.put("views/app/home.html",'<ion-view class="home-view">\n  <ion-nav-buttons side="left">\n    <button menu-toggle="left" class="button button-icon icon ion-navicon"></button>\n  </ion-nav-buttons>\n  <ion-nav-title>\n    <span>App</span>\n  </ion-nav-title>\n  <ion-content>\n    <div class="row">\n      <div class="col">\n        <h3 class="welcome-message">Welcome to your beautiful app!</h3>\n        <a class="button button-assertive button-block button-outline" ng-click="showLogOutMenu()">\n          Log Out\n        </a>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n'),e.put("views/app/side-menu.html",'<ion-side-menus enable-menu-with-back-views="false">\n  <ion-side-menu-content>\n    <ion-nav-bar class="bar-stable">\n      <ion-nav-back-button>\n      </ion-nav-back-button>\n      <ion-nav-buttons side="left">\n        <button class="button button-icon button-clear ion-navicon" menu-toggle="left">\n        </button>\n      </ion-nav-buttons>\n    </ion-nav-bar>\n    <ion-nav-view name="menuContent"></ion-nav-view>\n  </ion-side-menu-content>\n\n  <ion-side-menu side="left">\n    <ion-header-bar class="bar-stable">\n      <h1 class="title">Menu</h1>\n    </ion-header-bar>\n    <ion-content>\n      <ion-list>\n        <ion-item menu-close href="">\n          Nav 1\n        </ion-item>\n        <ion-item menu-close href="">\n          Nav 2\n        </ion-item>\n        <ion-item menu-close href="">\n          Nav 3\n        </ion-item>\n        <ion-item menu-close href="">\n          Nav 4\n        </ion-item>\n      </ion-list>\n    </ion-content>\n  </ion-side-menu>\n</ion-side-menus>\n'),e.put("views/auth/create-account.html",'<ion-view class="auth-view" cache-view="false">\n  <ion-nav-bar class="view-navigation">\n    <ion-nav-back-button>\n    </ion-nav-back-button>\n  </ion-nav-bar>\n  <ion-content class="padding">\n    <div class="row form-heading">\n      <div class="col">\n        <h1 class="form-title">Create your account</h1>\n        <h3 class="form-sub-title">Sign up with Social Network or Email</h3>\n        <div class="social-sign-up button-bar">\n          <a class="button icon ion-social-facebook button-positive"></a>\n          <a class="button icon ion-social-twitter button-calm"></a>\n        </div>\n      </div>\n    </div>\n    <div class="row form-separator">\n      <hr class="separator-line"/>\n      <span class="separator-mark">OR</span>\n      <hr class="separator-line"/>\n    </div>\n    <div class="row form-wrapper">\n      <div class="col">\n        <form name="signup_form" class="" novalidate>\n          <div class="form-fields-outer list list-inset">\n            <div class="row multi-inputs">\n              <div class="col">\n                <label class="item item-input">\n                  <input class="multi-input" type="text" placeholder="Name" name="name" ng-model="user.name" required>\n                </label>\n              </div>\n              <div class="col">\n                <label class="item item-input">\n                  <input class="multi-input" type="text" placeholder="Username" name="username" ng-model="user.userName" required>\n                </label>\n              </div>\n            </div>\n            <label class="item item-input">\n              <input type="email" placeholder="Email" name="email" ng-model="user.email" required>\n            </label>\n            <label class="item item-input">\n              <input type="tel" placeholder="Phone Number" name="phone" ng-model="user.phone" required>\n            </label>\n            <label class="item item-input" show-hide-container>\n              <input type="password" placeholder="Password" name="password" ng-model="user.password" required show-hide-input>\n            </label>\n            <button type="submit" class="sign-up button button-block" ng-click="doSignUp()" ng-disabled="signup_form.$invalid">\n              Sign Up\n            </button>\n            <p ng-show="error" class="message error">{{error}}</p>\n          </div>\n        </form>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n'),e.put("views/auth/dont-have-facebook.html",'<ion-view class="welcome-view" cache-view="false">\n  <ion-content scroll="false">\n    <div multi-bg="[\'img/bg-gif1.gif\']" helper-class="no-facebook-welcome-bg">\n    <!-- <div multi-bg="[\'http://lorempixel.com/640/1136?1\']"> -->\n    <!-- <div multi-bg="bgs" interval="3000" helper-class="no-facebook-welcome-bg"> -->\n      <div class="top-content row">\n        <div class="app-copy col col-center">\n          <h1 class="app-logo">logo</h1>\n          <p class="app-tagline">\n            Your tag line\n          </p>\n        </div>\n      </div>\n      <div class="bottom-content row">\n        <div class="col col-bottom">\n          <a class="create-account button-large button button-block" ui-sref="create-account">\n            Create an account\n          </a>\n          <a class="have-account button button-clear button-block" ui-sref="welcome-back">\n            Already have an account?\n          </a>\n          <section ng-include="\'views/partials/legal-notice.html\'"></section>\n        </div>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n'),e.put("views/auth/facebook-sign-in.html",'<ion-view class="welcome-view" cache-view="false">\n  <ion-content scroll="false">\n    <div multi-bg="[\'img/bg-img2.jpeg\']" helper-class="facebook-welcome-bg">\n      <div class="top-content row">\n        <div class="app-copy col col-center">\n          <h1 class="app-logo">logo</h1>\n          <p class="app-tagline">\n            Your tag line\n          </p>\n        </div>\n      </div>\n      <div class="bottom-content row">\n        <div class="col col-bottom">\n          <a class="facebook-sign-in button-large button button-block" ng-click="facebookSignIn()">\n            Sign In with Facebook\n          </a>\n          <a class="dont-have-facebook button button-clear button-block" ui-sref="dont-have-facebook">\n            Don\'t have Facebook?\n          </a>\n          <section ng-include="\'views/partials/legal-notice.html\'"></section>\n        </div>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n'),e.put("views/auth/welcome-back.html",'<ion-view class="auth-view" cache-view="false">\n  <ion-nav-bar class="view-navigation">\n    <ion-nav-back-button>\n    </ion-nav-back-button>\n  </ion-nav-bar>\n  <ion-content class="padding">\n    <div class="row form-heading">\n      <div class="col">\n        <h1 class="form-title">Welcome back</h1>\n        <h3 class="form-sub-title">Logn to your account to start</h3>\n        <div class="social-sign-up button-bar">\n          <a class="button icon ion-social-facebook button-positive"></a>\n          <a class="button icon ion-social-twitter button-calm"></a>\n        </div>\n      </div>\n    </div>\n    <div class="row form-separator">\n      <hr class="separator-line"/>\n      <span class="separator-mark">OR</span>\n      <hr class="separator-line"/>\n    </div>\n    <div class="row form-wrapper">\n      <div class="col">\n        <form name="login_form" class="" novalidate>\n          <div class="form-fields-outer list list-inset">\n            <label class="item item-input">\n              <input type="text" placeholder="Username" name="username" ng-model="user.userName" required>\n            </label>\n            <label class="item item-input" show-hide-container>\n              <input type="password" placeholder="Password" name="password" ng-model="user.password" required show-hide-input>\n            </label>\n            <button type="submit" class="login button button-block" ng-click="doLogIn()" ng-disabled="login_form.$invalid">\n              Login\n            </button>\n            <p ng-show="error" class="message error">{{error}}</p>\n          </div>\n        </form>\n        <div class="alternative-actions">\n          <a class="forgot-password button button-clear button-block" ng-click="showForgotPassword()">\n            Forgot your password?\n          </a>\n        </div>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n'),e.put("views/partials/forgot-password.html",'<ion-modal-view class="auth-view modal-view">\n	<ion-header-bar>\n		<h1 class="title modal-title">Recover password</h1>\n		<a class="button button-clear" ng-click="forgot_password_modal.hide()">Cancel</a>\n	</ion-header-bar>\n	<ion-content class="padding">\n		<div class="row form-heading">\n      <div class="col">\n				<h3 class="form-sub-title">Enter the email for your account</h3>\n			</div>\n		</div>\n		<div class="row form-wrapper">\n      <div class="col">\n				<form name="recover_password_form" class="" novalidate>\n					<div class="form-fields-outer list list-inset">\n						<label class="item item-input">\n							<input type="email" placeholder="Email" name="email" ng-model="user.email" required>\n						</label>\n						<button type="submit" class="recover-password button button-block" ng-click="requestNewPassword()" ng-disabled="recover_password_form.$invalid">\n							Recover\n						</button>\n						<p ng-show="error" class="message error">{{error}}</p>\n						<p ng-show="message" class="message">{{message}}</p>\n					</div>\n				</form>\n			</div>\n		</div>\n	</ion-content>\n</ion-modal-view>\n'),e.put("views/partials/legal-notice.html",'<p class="legal-notice">\n	By Signing up you agree to the <a ng-click="showTerms()">Terms of Service</a> and <a ng-click="showPrivacyPolicy()">Privacy Policy</a>\n</p>\n'),e.put("views/partials/privacy-policy.html",'<ion-modal-view class="modal-view">\n	<ion-header-bar>\n		<h1 class="title modal-title">Privacy Policy</h1>\n		<a class="button button-clear" ng-click="privacy_policy_modal.hide()"><span class="icon ion-close"></span></a>\n	</ion-header-bar>\n	<ion-content class="padding">\n    <div class="row">\n      <div class="col">\n        <div class="privacy-policy">\n    			<p>Last modified: April 14, 2014</p>\n    			<h4 class="title">Welcome to ionWordpress!</h4>\n    			<p>Thanks for using our products and services (“Services”). Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n    			<h4 class="title">Using our Services</h4>\n    			<p>You must follow any policies made available to you within the Services.</p>\n    			<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\n    			<h4 class="title">About these Terms</h4>\n    			<p>We may modify these terms or any additional terms that apply to a Service to, for example, reflect changes to the law or changes to our Services. You should look at the terms regularly. We’ll post notice of modifications to these terms on this page. We’ll post notice of modified additional terms in the applicable Service. Changes will not apply retroactively and will become effective no sooner than fourteen days after they are posted. However, changes addressing new functions for a Service or changes made for legal reasons will be effective immediately. If you do not agree to the modified terms for a Service, you should discontinue your use of that Service.</p>\n    		</div>\n			</div>\n		</div>\n	</ion-content>\n</ion-modal-view>\n'),e.put("views/partials/terms-of-service.html",'<ion-modal-view class="modal-view">\n	<ion-header-bar>\n		<h1 class="title modal-title">Terms of Service</h1>\n		<a class="button button-clear" ng-click="terms_of_service_modal.hide()"><span class="icon ion-close"></span></a>\n	</ion-header-bar>\n	<ion-content class="padding">\n    <div class="row">\n      <div class="col">\n        <div class="terms-of-service">\n    			<p>Last modified: April 14, 2014</p>\n    			<h4 class="title">Welcome to ionWordpress!</h4>\n    			<p>Thanks for using our products and services (“Services”). Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n    			<h4 class="title">Using our Services</h4>\n    			<p>You must follow any policies made available to you within the Services.</p>\n    			<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\n    			<h4 class="title">About these Terms</h4>\n    			<p>We may modify these terms or any additional terms that apply to a Service to, for example, reflect changes to the law or changes to our Services. You should look at the terms regularly. We’ll post notice of modifications to these terms on this page. We’ll post notice of modified additional terms in the applicable Service. Changes will not apply retroactively and will become effective no sooner than fourteen days after they are posted. However, changes addressing new functions for a Service or changes made for legal reasons will be effective immediately. If you do not agree to the modified terms for a Service, you should discontinue your use of that Service.</p>\n    		</div>\n			</div>\n		</div>\n	</ion-content>\n</ion-modal-view>\n'),e.put("views/templates/misc/multi-bg.html",'<div class="multi-bg-outer" ng-class="{ \'finish-loading\': loaded }">\n	<img bg class="multi-bg {{ helperClass }}" ng-src="{{ bg_img }}"/>\n	<span class="bg-overlay"></span>\n	<ion-spinner ng-show="!loaded" class="spinner-on-load"></ion-spinner>\n	<!-- <span ng-show="!loaded" class="spinner-on-load ion-load-c"></span> -->\n	<ng-transclude></ng-transclude>\n</div>\n'),e.put("views/templates/misc/show-hide-password.html",'<div class="show-hide-input" ng-transclude>\n</div>\n<a class="toggle-view-anchor" on-touch="toggleType($event)">\n	<span class="ion-eye-disabled" ng-show="show"></span>\n	<span class="ion-eye" ng-show="!show"></span>\n</a>\n')}]);