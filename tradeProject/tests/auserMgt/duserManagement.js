'use strict';

var users, commonObj, testData;

module.exports = {
    '@tags': ['userMgt'],
    
    before : function(browser) {
        console.log('Starting test...');
        
        users =  browser.page.userPages();
        commonObj = browser.page.commonPages();
        testData = browser.globals

	    browser            
            .Login(testData.Adminusername,testData.password)
      
    },

    after : function(browser) {
        console.log('Test completed...');
        
        browser.Logout()
            .end()	
    },

    'Search for a user successfully': function(browser){
        users.validatePage()            
            .searchUser(testData.username)
            .clearSearch()   
    }, 

    'Update user type successfully': function(browser){
        users          
            .editUser()
            .editType(testData.userType)
            .userUpdate()
        commonObj.validateMessage("User updated successfully.")
      
    }, 
 
    'Update user role successfully': function(browser){
        users
            .editUser()
            .editRole(testData.userRole)
            .userUpdate()
        commonObj.validateMessage("User updated successfully.")
    },

    'Update user branch successfully': function(browser){
        users
            .validatePage()
            .editUser()
            .editBranch(["t","e","s"])
            .userUpdate()
        commonObj.validateMessage("User updated successfully.")
    } 
};