'use strict';

var roles, commonObj, testData;

module.exports = {
    '@tags': ['roleMgt'],
    
    before : function(browser) {
        console.log('Starting test...');
            
        roles =  browser.page.rolePages();
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

    'Create role with empty role name':function(browser){
        roles.goToRole()
            .openCreateForm()
             .fillForm("",testData.roleDescription)
            .createRole()               
        commonObj.validateError('Role name required')
    },

    'Create role with role name < 5 characters': function(browser){
        roles
            .fillForm("tes",testData.roleDescription)
            .createRole()
        commonObj.validateError('Role name must be at least 5 characters and cannot start with number or special character')          
    },
    
    'Create role with role name starting with numbers': function(browser){
        roles.fillForm("1testrole",testData.roleDescription)
            .createRole()
        commonObj.validateError('Role name must be at least 5 characters and cannot start with number or special character')           
    },
    
    'Create role with role name starting with special characters': function(browser){
        roles.fillForm("_testrole",testData.roleDescription)
            .createRole()
        commonObj.validateError('Role name must be at least 5 characters and cannot start with number or special character')             
    },

    'Create role successfully': function(browser){
        roles.fillForm(testData.roleName,testData.roleDescription)
            .createRole()
        commonObj.validateMessage('Role Added!')
    },

    'Create duplicate role': function(browser){
        roles.fillForm(testData.roleName,testData.roleDescription)
            .createRole()
        commonObj.validateError('Role already exists')
        roles.cancel()
    },
/*
        'Update role with empty role name': function(browser){
            roles
                .goToRole()
                .openUpdateForm()             
                .clearForm()
                .extClick()
           //browser.pause(3000)    
            roles.updateRole()
            browser.pause()
          // commonObj.validateError('Role name required')
        },*/

    'Update role with role name < 5 characters': function(browser){
        roles
            .openUpdateForm() 
            .fillForm("tes",testData.roleDescription)
            .updateRole()
        commonObj.validateError('Role name must be at least 5 characters and cannot start with number or special character')
        roles.cancel()          
     },
     
    'Update role with role name starting with numbers': function(browser){
        roles
            .openUpdateForm()
            .fillForm("1testrole",testData.roleDescription)
            .updateRole()
        commonObj.validateError('Role name must be at least 5 characters and cannot start with number or special character') 
        roles.cancel()           
    },
     
    'Update role with role name starting with special characters': function(browser){
        roles
            .openUpdateForm()
            .fillForm("_testrole",testData.roleDescription)
            .updateRole()
        commonObj.validateError('Role name must be at least 5 characters and cannot start with number or special character')
        roles.cancel()
     },

    'Update role with existing role name': function(){
        roles
            .openUpdateForm()
            .fillForm(testData.roleName,testData.roleDescription)
            .updateRole()
        commonObj.validateError('Duplicate record')
        roles.cancel() 
    },

         'Update role successfully': function(){
            roles
                .openUpdateForm()             
                .fillForm(testData.roleNameUpdate,testData.roleDescription)
                .updateRole()
            commonObj.validateMessage('Role updated successfully.') 
        },  

};