'use strict';

var loginData, login,commonObj;

module.exports = {
	'@tags': ['passReset'],

	before : function(browser) {
		console.log('Opening Browser...');
	
		login = browser.page.loginPages();
		commonObj = browser.page.commonPages();
		loginData = browser.globals
		
		commonObj.pageLoad()
		login.forgotPasswordLnk();
	},

	after : function(browser) {
		console.log('Closing down...');
		
		browser.end();	
	},

	beforeEach: function(browser){
		browser.refresh();
	},

	'Reset password with empty username/email': function(){
		login.clickSubmit()
		commonObj.validateError('Email or Username required')
	},

	'Reset password with invalid email': function(){
		login
			.resetPassword('aaa@')
			.clickSubmit()	
		commonObj.validateError('User does not exist')
	},

	'Reset password with non-existing username': function(){
		login
			.resetPassword('aaa')
			.clickSubmit()	
		commonObj.validateError('User does not exist')
		
	},

	'Reset password with non-existing email': function(){
		login
			.resetPassword('yrj@joijo.com')
			.clickSubmit()	
		commonObj.validateError('User does not exist')
	},

	'Reset password with email': function(){
		login
			.resetPassword('oise@gmail.com')
			.clickSubmit()	
		commonObj.validateMessage('An email containing instructions on how to reset your password has been sent.')
	},

	'Reset password with username': function(){
		login
			.resetPassword('oise')
			.clickSubmit()	
		commonObj.validateMessage('An email containing instructions on how to reset your password has been sent.')
		
	},

	'Confirm user can return to Login Page': function(){
		login
			.returnToLogin()
	}

};