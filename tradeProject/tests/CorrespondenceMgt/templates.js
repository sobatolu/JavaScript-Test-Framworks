'use strict';

var template, commonObj, testData;

module.exports = {
    '@tags': ['template'],

    before : function(browser) {
        console.log('Starting test...');
        
        template =  browser.page.templatePages();
        commonObj = browser.page.commonPages();
        testData = browser.globals
        
        browser            
            .Login(testData.Adminusername,testData.password)
        commonObj.clickTemplate()
    },

    after : function(browser) {
        console.log('Test completed...');
        browser
            .Logout()
            .end()	
    },
  
    'Create template with empty name': function(browser){
        template.openTemplateForm()
            .clickCreateBtn()
        commonObj.validateError("Enter template name")
    },

    'Create template without selecting template purpose': function(browser){
        template.inputName(testData.templateName)
            .clickCreateBtn()
        commonObj.validateError("Select template purpose")
    }, 

    'Create template with empty template description': function(browser){
        template.inputName(testData.templateName)
            .selPurpose(testData.templatePurpose)
            .clickCreateBtn()
        commonObj.validateError("Enter template description")     
    },

    'Create letter template successfully': function(browser){
        template.inputName(testData.templateName)
            .selPurpose(testData.templatePurpose)
            .inputDescription(testData.templateDescription)
            .clickCreateBtn()
        commonObj.validateMsg("Template successfully created")       
    },

   'Create letter template with duplicate template name': function(browser){
        template.openTemplateForm()
            .inputName(testData.templateName)
            .selPurpose(testData.templatePurpose)
            .inputDescription(testData.templateDescription)
            .clickCreateBtn()
        commonObj.validateError("Duplicate Template name and/or type.")

    },
/*
    'Update letter template to empty name': function(browser){
        template.openUpdateForm()
            .inputName(" ")
            .clickUpdateBtn()
        commonObj.validateError("Enter template name")
        template.clickCancelBtn()
    },

    'Update letter template to empty description': function(browser){
        template.openUpdateForm()
            .inputDescription(" ")
            .clickUpdateBtn()
        commonObj.validateError("Enter template description")
        template.clickCancelBtn()
    }, 

    'Update email template to empty name': function(browser){
        template.navigateToEmails()
            .openUpdateForm()
            .inputName(" ")
            .clickUpdateBtn()
        commonObj.validateError("Enter template name")
        template.clickCancelBtn()
    },

    'Update email template to empty description': function(browser){
        template.openUpdateForm()
            .inputDescription(" ")
            .clickUpdateBtn()
        commonObj.validateError("Enter template description")
        template.clickCancelBtn()
    }, 
*/
    'Update letter template to duplicate name': function(browser){
        template.openUpdateForm()
            .inputName("Letter of Approval")
            .clickUpdateBtn()
        commonObj.validateError("Duplicate Template name.")
    }
};