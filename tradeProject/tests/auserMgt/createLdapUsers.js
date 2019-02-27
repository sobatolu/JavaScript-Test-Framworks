'use strict';

var users, commonObj, testData;

module.exports = {
    '@tags': ['ldapUsers'],

    before : function(browser) {
        console.log('Starting test...');
        
        users =  browser.page.userPages();
        commonObj = browser.page.commonPages();
        testData = browser.globals

	    browser            
            .Login(testData.Adminusername,testData.password)
    },

    beforeEach : function(browser){
        console.log('Test init')
        users.importForm()
    },

    after : function(browser) {
        console.log('Test completed...');
        
        browser.Logout()
            .end()	
    },

  
     'Import user with empty username': function(){
        users.ldapUsername('')
            .importUser()
        commonObj.validateError('Username is required')
    },
 
    'Import non-existing user from ldap': function(){
        users.ldapUsername('nonExisting')
            .importUser()
        commonObj.validateError('Ldap user not found')
    },
 
    'Import user successfully': function(){
        users.ldapUsername(testData.ldapuser)
            .importUser()
            .verifyImport(testData.ldapusername)
    },

     'Create ldap user without selecting user type': function() {
        users.createUser()
        commonObj.validateError('User type required')
    },

    'Create ldap user without selecting user role': function() {
        users.ldapuserType(testData.userType)
            .createUser()
        commonObj.validateError('Role Required')
    } ,

    'Create ldap user without selecting user branch': function() {
        users.ldapuserRole(testData.userRole)
            .createUser()
        commonObj.validateError('Branch required')    
    },

    'Create ldap user successfully': function(browser){
        users.ldapBranch(testData.branch)
            .createUser()
        commonObj.validateMessage('User Added!')
        users.cancelCreation()    
    }, 
    
    'Attempt to create duplicate ldap user': function(browser){
        users.ldapUsername(testData.ldapuser)
            .importUser()
            .verifyImport(testData.ldapusername)
            .ldapuserType(testData.userType)
            .ldapuserRole(testData.userRole)
            .ldapBranch(testData.branch)
            .createUser()
        commonObj.validateError('User already exists') 
        users.cancelCreation() 
    }  
};