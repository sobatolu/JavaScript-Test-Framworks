'use strict';

var users, commonObj, testData;

module.exports = {
    '@tags': ['dbUsers'],

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
        
        browser
            .Logout()
            .end()	
    },

    beforeEach : function(browser){
        console.log('Test init')
        users.createForm()
        //browser.pause(1000)
    },

    afterEach: function(){
        console.log('Test ends')
        users.cancelCreation()
    },
   
    'Create a user with empty username': function(browser){
        users.fillTextField("", "")              
            .createUser()   
        commonObj.validateError('Username required')
    },

    'Create a user with invalid username (less than 5 characters)': function(browser){
        users.fillTextField("ccc", "")              
            .createUser()   
        commonObj.validateError('Username must be at least 5 characters and cannot start with number or special character')
    },

    'Create a user with invalid username (starts with a number)': function(browser){
        users.fillTextField("34test", "")              
             .createUser()   
        commonObj.validateError('Username must be at least 5 characters and cannot start with number or special character')
    },

    'Create a user with invalid username (starts with special characters)': function(browser){
        users.fillTextField("_test", "")              
            .createUser()   
        commonObj.validateError('Username must be at least 5 characters and cannot start with number or special character') 
    },
    
    'Create a user with empty email': function (browser){
        users.fillTextField("testuser", "")              
            .createUser()   
        commonObj.validateError('Email required') 
     },

    'Create a user with invalid email': function (browser){
        users.fillTextField("testuser", "err")              
            .createUser()   
        commonObj.validateError('Invalid email format') 
     },

    'Create a user without selecting user type': function(browser){
        users.fillTextField(testData.username, testData.email)
            .createUser()
        commonObj.validateError('User type required')
    },

    'Create a user without assigning role': function(browser){
        users.fillTextField(testData.username, testData.email)
            .selectType(testData.userType)
            .createUser()
        commonObj.validateError('Role Required')
     }, 
 
    'Create a user without selecting branch': function(browser){
        users.fillTextField(testData.username, testData.email)
            .selectType(testData.userType)
            .selectRole(testData.userRole)
            .createUser()
        commonObj.validateError('Branch required')
    },   
 
    'Create Db user successfully': function(browser){
        users.fillTextField(testData.username, testData.email)
            .selectType(testData.userType)
            .selectRole(testData.userRole)
            .selectBranch(testData.branch)
            .createUser()
        commonObj.validateMessage('User Added!')
        
    }, 
 
    'Create user with existing username': function(browser){
        users.fillTextField(testData.username, "someemail@mail.com")
            .selectType(testData.userType)
            .selectRole(testData.userRole)
            .selectBranch(testData.branch)
            .createUser()
        commonObj.validateError('User already exists')
    }, 

    'Create user with existing email': function(browser){
        users.fillTextField("testuser11", testData.email)
            .selectType(testData.userType)
            .selectRole(testData.userRole)
            .selectBranch(testData.branch)
            .createUser()
        commonObj.validateError('Email already exists')
     }    
};   