'use strict';

var passwordChange, commonObj, loginData,login;

module.exports = {
    '@tags': ['changePassword'],

    before : function(browser) {
        console.log('Starting test...');
        
        passwordChange =  browser.page.changePasswordPages();
        commonObj = browser.page.commonPages();
        loginData = browser.globals
        login = browser.page.loginPages();

	    browser            
            .Login(loginData.Branchusername,loginData.password)
    },

    after : function(browser) {
        console.log('Test completed...');
        browser
            .Logout()
            .end()	
	},

    'Change password with empty current password': function(browser){

        commonObj.clickUserMenu()
            .clickChangePassword()
        passwordChange.changePasswordBtn()
        commonObj.validateError('Old password required')
    },

    'Change password with empty new password': function(browser){
        passwordChange.changeForm(loginData.Oldpassword,'')
            .changePasswordBtn()
        commonObj.validateError('New password required')
    },

    'Change password with invalid current password': function(browser){
        passwordChange.changeForm('wrong password','password')
            .changePasswordBtn()
        commonObj.validateError('Provided password does not match existing one!')
    },

    'Change password with old password matching new password': function(browser){
        passwordChange.changeForm(loginData.Oldpassword,loginData.Oldpassword)
            .changePasswordBtn()
        commonObj.validateError('New password must be different from old one!')
  
    },

    'Change password successfully': function(browser){
        passwordChange.changeForm(loginData.Oldpassword,loginData.Newpassword)
            .changePasswordBtn()
        commonObj.validateMessage('Password Updated Successfully!')
        
    },
    
    'Cancel change password attempt': function(browser){
        passwordChange.cancelForm()
        browser.Logout()
        
    },

    'Login user with changed password': function(browser){
        login
            .fillForm(loginData.Branchusername,loginData.Newpassword)
            .clickSubmit()
        commonObj.confirmUserLoggedIn()
            
    }

    
 
};