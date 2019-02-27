'use strict';

var auditCommands = {

    validatePage: function(){
		return this.waitForElementVisible('@searchBtn')
            .verify.visible('@keyword')
            .verify.visible('@viewLnk')           
    },
    
    inputKeyword: function(value){
        return this.waitForElementVisible('@keyword')
            .sendValue('@keyword',value)
    },

    selStartDate: function(toDate){
         return this.waitForElementVisible('@startdateField')
            .click('@startdateField')
            .pickDate(toDate)
    },

    selEndDate: function(fromDate){
        return this.waitForElementVisible('@enddateField')
            .click('@enddateField')
            .pickDate(fromDate)
    },

    searchAudit: function(){
        return this.waitForElementVisible('@searchBtn')
             .click('@searchBtn')
    }

};

var resultCommands = {

    noRecord: function(msg){
        return this.waitForElementVisible('@resultTable')
            .getText('@resultTable', function(result){
                this.assert.equal(result.value, msg)
            });
    },

    resultErr: function(msg){
        return this.waitForElementVisible('@errResult')
            .getText('@errResult', function(result){
                this.assert.equal(result.value, msg)
        });
    },

    auditRefresh: function(){
        return this.waitForElementVisible('@refreshIcon')
            .click('@refreshIcon')
    },

    searchResult: function(msg){
        return this.waitForElementVisible('@resultTable')
        .getText('@resultTable', function(result){
            this.assert.notEqual(result.value, msg)
        });
    },

    viewDetails: function(){
        return this.waitForElementVisible('@resultTable')
            .click('@viewLnk')
            .waitForElementVisible('@detailFrame')
            .assert.elementPresent('@detailFrame')
            
    }

};



module.exports = {
    elements: {
        keyword: {
            selector:'input[name=searchParam]'
        },
        searchBtn:{
            selector:'button[type=submit]'
        },
        viewLnk:{
            selector:"table>tbody>tr>td:last-child"
        },

        startdateField: {
            selector:'#audit-search-start-date'
        },

        enddateField: {
            selector:'#audit-search-end-date'
        },

        resultTable: {
            selector:'table>tbody>tr>td'
        },

        errResult: {
            selector: 'div.ui.small.header'
        },

        refreshIcon: {
            selector: '.red.repeat.big.icon'
        },

        viewLnk: {
            selector:'table>tbody>tr>td>a'
        },

        detailFrame: {
            selector: "//div[@class='description']",
            locateStrategy: 'xpath'
        },

        closeFrame: {
            selector: '.close.icon'
        }
           
    },

    commands: [auditCommands, resultCommands]
};