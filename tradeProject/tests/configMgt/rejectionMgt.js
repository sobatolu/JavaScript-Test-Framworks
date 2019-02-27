'use strict';

var Rreasons, commonObj, testData;

module.exports = {
    '@tags': ['rejectReasons'],

    before : function(browser) {
        console.log('Starting test...');
        
        Rreasons =  browser.page.rejectionPages();
        commonObj = browser.page.commonPages();
        testData = browser.globals

	    browser            
            .Login(testData.Adminusername,testData.password)
        commonObj.clickRejectReason()
    },

    after : function(browser) {
        console.log('Test completed...');
        browser
            .Logout()
            .end()	
    },
   /*
    'Create a rejection reason successfully': function(browser){
        Rreasons.openCreateForm()
            .inputName('testReason')
            .selectEvent('AMENDMENT')
            .selectDocType(["s","h","i"])
            .clickCheckbox()
            .saveForm()
            .verifyMsg('Successful')
            .clickCancel()
    }, 

    'Attempt to create a rejection reason with empty name': function(browser){
        Rreasons.selectEvent('AMENDMENT')
            .selectDocType(["s","h","i"])
            .clickCheckbox()
            .saveForm()
            .verifyMsg('Name field is required')
    },

    'Attempt to create a rejection reason without selecting event': function(browser){
        Rreasons.inputName('testReason')
            .selectDocType(["s","h","i"])
            .clickCheckbox()
            .saveForm()
            .verifyMsg('Event field is required')
    },

    'Attempt to create a rejection reason without selecting document type': function(browser){
        Rreasons.inputName('testReason')
            .selectEvent('AMENDMENT')
            .clickCheckbox()
            .saveForm()
            .verifyMsg('Document Type field is required')
            .clickCancel()
    },

     'Update created rejection reason successfully': function(browser){
        Rreasons.openUpdateForm()
           .inputName('testReasonUpdate')
           .updateForm()
           .verifyMsg('Successful')
           .clickCancel()
    },*/
/*
    'Attempt to update a rejection reason with empty name': function(browser){
        Rreasons.openUpdateForm()
           .inputName('')
        browser.pause(3000)
        Rreasons.updateForm()
           //.verifyMsg('Successful')
           //.clickCancel()
        browser.pause()
    },*/

    'Search for a rejection reason using name': function(browser) {
        Rreasons.searchForm('testReason')
        browser.pause()
    }
};