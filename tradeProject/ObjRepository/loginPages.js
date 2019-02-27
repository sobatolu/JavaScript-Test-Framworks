'use strict';

var generalCommands = {

	clickSubmit: function() {
		return this.waitForElementVisible( '@submitBtn')
			.click('@submitBtn')
	}

};

var loginCommands = {

	validatePage: function() {
		return this.waitForElementVisible( '@submitBtn')
			//.verify.visible('@usernameInput')
			//.verify.visible('@passwordInput')
			
	},
	
	fillForm: function(username, key) {
		return this.waitForElementVisible( '@usernameInput')
			.clearValue('@usernameInput')
			.setValue('@usernameInput', username)
			.clearValue('@passwordInput')
			.setValue('@passwordInput', key)
	}


};

var forgotPassCommands = {

	forgotPasswordLnk: function(){
		return this.verify.visible('@forgotLnk')
			.click('@forgotLnk')
	},

	returnToLogin: function() {
		return this.verify.visible('@loginPageLnk')
			.click('@loginPageLnk')
	},

	resetPassword: function(value){
		return this.verify.visible('@forgotEmail')
			.clearValue('@forgotEmail')
			.setValue('@forgotEmail', value)
	}

};


module.exports = {

	elements: {
		usernameInput: { 
			selector: 'input[name=username]'
		},
		passwordInput: { 
			selector: 'input[type=password]'
		},
		submitBtn: {
		  selector: 'button[type=submit]'
		},
		forgotLnk: {
		  selector:"//a[contains(text(), 'Forgot your password?')]",
		  locateStrategy: 'xpath'
		},
		forgotEmail: {
			selector: "input[name=email]"
		},
		forgotMsgBox: {
			selector:"//div/div[@class='ui inverted segment tc-blue-btn']",
		  	locateStrategy: 'xpath'
		},
		
		loginPageLnk: {
			selector:"//div/div/div/a",
			locateStrategy: 'xpath'
		}
	},
	
	commands: [loginCommands, forgotPassCommands, generalCommands]
};

