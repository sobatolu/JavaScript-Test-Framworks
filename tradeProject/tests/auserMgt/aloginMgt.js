'use strict';

var loginData, login,commonObj;

module.exports = {
	'@tags': ['loginMgt'],

	before : function(browser) {
		
		console.log('Opening Browser...');
	
		login = browser.page.loginPages();
		commonObj = browser.page.commonPages();
		loginData = browser.globals
		
		commonObj.pageLoad();
	},

	after : function(browser) {
		console.log('Closing down...');
		browser.end();	
	},

	beforeEach: function(browser){
		browser.refresh();
	},

	'Login with empty username' : function (browser) {
		
		login.clickSubmit()
		commonObj.validateError('Username required')
	},

	'Login with empty password' : function (browser) {
		
		login
			.fillForm(loginData.Adminusername,'')
			.clickSubmit()
		commonObj.validateError('Password required')
	},
 
	'Login with invalid credentials' : function (browser) {
		
		login
			.fillForm('wronguser','password')
			.clickSubmit()
		commonObj.validateError('Invalid Login details.')
	},
	
	'Login with valid credentials' : function (browser) {
				
		login
			.fillForm(loginData.Adminusername,loginData.password)
			.clickSubmit()
		commonObj.confirmUserLoggedIn()
	},

	'Log user out': function(browser) {
		commonObj
			.clickUserMenu()
        	.logoutUser()
	}

};