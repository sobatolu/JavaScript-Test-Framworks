'use strict';

var branch, commonObj, testData;

module.exports = {
    '@tags': ['branchMgt'],
    
    before : function(browser) {
        console.log('Starting test...');
            
        branch =  browser.page.bankPages();
        commonObj = browser.page.commonPages();
        testData = browser.globals
    
        browser            
            .Login(testData.Adminusername,testData.password)
        
        commonObj.clickBranch()
        
          
    },
    
    after : function(browser) {
        console.log('Test completed...');

        browser.Logout()
            .end()	
    },

     'Create branch with empty branch code':function(browser){
        branch.validatePage()
            .openCreateForm()
            .submitBranchForm()
        commonObj.validateError("Branch code required")
    },
 
    'Create branch with empty branch name':function(browser){
        branch.inputCode(testData.branchCode)
            .submitBranchForm()
        commonObj.validateError("Branch name required")
    },

    'Create branch with empty branch address':function(browser){
        branch.inputCode(testData.branchCode)
            .inputName(testData.branchName)
            .submitBranchForm()
        commonObj.validateError("Address required")
    },

    'Create branch with empty branch email':function(browser){
        branch.inputCode(testData.branchCode)
            .inputName(testData.branchName)
            .inputAddr(testData.branchAddr)
            .submitBranchForm()
        commonObj.validateError("At least one email required")
    },

    'Create branch with invalid email': function(browser){
        branch.inputCode(testData.branchCode)
            .inputName(testData.branchName)
            .inputAddr(testData.branchAddr)
            .inputEmails("test")
            .submitBranchForm()
        commonObj.validateError("Invalid Email address: test")        
    },

    'Create branch successfully': function(browser){
        branch.inputCode(testData.branchCode)
            .inputName(testData.branchName)
            .inputAddr(testData.branchAddr)
            .inputEmails(testData.branchEmail)
            .submitBranchForm()
        commonObj.validateMessage("Branch successfully added!")
    },

    'Create duplicate branch name': function(browser){
        branch.inputCode("1234556666")
            .inputName(testData.branchName)
            .inputAddr(testData.branchAddr)
            .inputEmails(testData.branchEmail)
            .submitBranchForm()
        commonObj.validateError("Branch code or name already exists")
    },

    'Create duplicate branch code': function(browser){
        branch.inputCode(testData.branchCode)
            .inputName("anotherbranch")
            .inputAddr(testData.branchAddr)
            .inputEmails(testData.branchEmail)
            .submitBranchForm()
        commonObj.validateError("Branch code or name already exists")
        branch.cancel()
    },  
/*
    'Update branch code with empty value': function(browser){
        branch.openUpdateForm()
            .inputCode("")
            .submitBranchForm()
        commonObj.validateError("Branch code required")
    },

      'Update branch name with empty value': function(browser){
        branch.inputCode(testData.branchCode)
            .inputName("")
            .submitBranchForm()
        commonObj.validateError("Branch name required")
    },

    'Update branch address to empty': function(browser){
        branch.inputCode(testData.branchCode)
            .inputName(testData.branchName)
            .inputAddr("")
            .submitBranchForm()
        commonObj.validateError("Address required")
    },
    
    'Update branch email to empty': function(browser){
        branch.inputAddr(testData.branchAddr)
            .inputEmails("")
            .submitBranchForm()
        commonObj.validateError("At least one email required")
    },*/

    'Update branch code with duplicate value': function(browser){
        branch.openUpdateForm()
            .inputCode("33061800")
            .submitBranchForm()
        commonObj.validateError("Branch code or name already belongs to another record.")
    },

    'Update branch name with duplicate value': function(browser){
        branch.inputName("HQ")
            .submitBranchForm()
        commonObj.validateError("Branch code or name already belongs to another record.")
    },

    'Update branch email to invalid value': function(browser){
        branch.inputEmails("test")
            .submitBranchForm()
        commonObj.validateError("Invalid Email address: test")
        branch.cancel()
    }, 

    'Update branch successfully': function(browser){
        branch.openUpdateForm()
            .inputEmails("testemails@test.com")
            .submitBranchForm()
        commonObj.validateMsg("Branch updated successfully.")
    }, 
 
    'Delete branch successfully': function(browser){
        branch.disableBranch()
            .disableBranch()
            commonObj.validateMsg("Branch deleted successfully")
    } 
    
 
};