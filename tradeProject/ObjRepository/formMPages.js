'use strict';

var generalCommands = {
    
        clickSubmit: function() {
            return this.waitForElementVisible( '@submitBtn')
                .click('@submitBtn')
        }
    
};

var formSearchCommands = {

};

var formDetailsCommands = {

};
    

module.exports = {
    
        elements: {
            formNumber: { 
                selector: '#search-form-m-formNumber'
            },
            applicationNumber: { 
                selector: '#search-form-m-applicationNumber'
            },
            applicantTin: {
              selector: '#search-form-m-applicantTin'
            },
            beneficiaryName: {
              selector:'#search-form-m-beneficiaryName'
            },
            cbnStatus: {
               
            },
            bankStatus: {
                
            },            
            attachmentStatus: {
               
            },
            prohibitionStatus: {

            },
            exceptionStatus: {

            },
            submitbtn: {
                selector:'button[type=submit]'
            }
        },
        
        commands: []
    };