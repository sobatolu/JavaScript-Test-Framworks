'use strict';

var configs, commonObj, testData;

module.exports = {
    '@tags': ['config'],

    before : function(browser) {
        console.log('Starting test...');
        
        configs =  browser.page.configPages();
        commonObj = browser.page.commonPages();
        testData = browser.globals

	    browser            
            .Login(testData.Adminusername,testData.password)
        commonObj.clickConfig()
    },

    after : function(browser) {
        console.log('Test completed...');
        browser
            .Logout()
            .end()	
    },
   
    'Create app parameters with invalid key: empty key': function(browser){
        configs.validatePage()
            .clickCreate()
            .validateFrame()
            .createConfig()
        commonObj.validateError("Configuration key required")  
    } , 

    'Create app parameters with invalid value: empty value': function(browser){
        configs.createForm(testData.configKey,"","")
            .createConfig()
        commonObj.validateError("Configuration value required")
    }, 

    'Create app parameters with invalid description: empty description': function(browser){
        configs.createForm(testData.configKey,testData.configValue,"")
            .createConfig()
        commonObj.validateError("Description cannot be empty") 
    },

    'Create app parameter successfully': function(browser){
        configs.createForm(testData.configKey,testData.configValue,testData.configDescription)
            .createConfig()
        commonObj.validateMessage("Config Added!") 
    },

    'Create app parameter with existing key: Duplicate': function(browser){
        configs.createForm(testData.configKey,testData.configValue,testData.configDescription)
            .createConfig()
        commonObj.validateError("Application parameter already exists") 
        configs.cancelCreate()
    }, 
/*
    'Edit app parameter with empty value': function(browser){
        configs.editConfig()
            .updateForm("",testData.configDescription)
            .updateConfig()
        commonObj.validateError("Config value required") 
    },

    'Edit app parameter with empty description': function(browser){
        configs.editConfig()
            .updateForm(testData.configValue,"")
            .updateConfig()
        commonObj.validateError("Description cannot be empty") 
    },
 */

    'Edit app parameter value successfully': function(browser){
        configs.editConfig()
            .updateForm(testData.configvalueUpdate,testData.configDescription)
            .updateConfig()
        commonObj.validateMessage("updated successfully.") 
    },

    'Edit app parameter description successfully': function(browser){
        configs.editConfig()
            .updateForm(testData.configValue,testData.configDescripUpdate)
            .updateConfig()
        commonObj.validateMessage("updated successfully.") 
    },

    'Delete created system config': function(browser){
        configs.deleteConfig()
        commonObj.validateMessage("Configuration deleted successfully.")
       
    },

     'Delete system configuration: unsuccessfully': function(browser){
        configs.deleteConfig()
        commonObj.validateError("Could not delete configuration. Operation not permitted for System Configuration") 
    }  
 
};