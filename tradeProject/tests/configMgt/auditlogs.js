'use strict';

var audits, commonObj, loginData;

module.exports = {
    '@tags': ['audit'],

    before : function(browser) {
        console.log('Starting test...');
        
        audits =  browser.page.auditPages();
        commonObj = browser.page.commonPages();
        loginData = browser.globals

	    browser            
            .Login(loginData.Adminusername,loginData.password)
        commonObj.clickAudit()
    },

    after : function(browser) {
        console.log('Test completed...');
        browser
            .Logout()
            .end()	
    },
   
    'Most recent audit log is displayed to user': function(browser){
        audits.validatePage()
            .searchResult("No Search Result")
    }, 

    'No record with selected date range': function(browser){
        audits.selStartDate("1,May 2017")
            .selEndDate("31,May 2017")
            .searchAudit()
            .noRecord("No Search Result")
    }, 

    'Invalid date range: End date > Start date': function(browser){
        browser.refresh()
        audits.selStartDate("30,January 2018")
            .selEndDate("1,January 2018")
            .searchAudit()
        commonObj.validateError("Start date is greater than end date")
    },
 
    'Search for user audit log': function(browser){
        browser.refresh()
        audits.inputKeyword("adminuser")
            .searchAudit()
            .searchResult("No Search Result")
            .noRecord("adminuser")
    },

    'View details about audit log': function(browser){
        audits.viewDetails()
        browser.refresh()
    } 
};