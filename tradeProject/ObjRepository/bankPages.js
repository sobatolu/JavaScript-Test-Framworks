'use strict';

var generalCommands = {
    
        validatePage: function(){
            return this.waitForElementVisible('@branchBtn')
           
        },
    
        cancel: function(){
            return this.waitForElementClickable('@cancelBtn')
                .click('@cancelBtn')
        },

        searchBranch: function(branch){
            return this.waitForElementVisible('@searchBox')
                .sendValue('@searchBox',branch)
                .waitForElementClickable('@searchBtn')
                .click('@searchBtn')
        }

    
    };

var branchCommands = {

    openCreateForm: function(){
        return this.waitForElementVisible('@branchBtn')
            .click('@branchBtn') 
    },

    inputCode: function(code){
        return this.waitForElementVisible('@codeTxt')
            .sendValue('@codeTxt',code)
    },

    inputName: function(name){
        return this.waitForElementVisible('@nameTxt')
            .sendValue('@nameTxt', name)
    },

    inputAddr: function(addr){
        return this.waitForElementVisible('@addrTxt')
             .sendValue('@addrTxt',addr)
    },

    inputEmails: function(emails){
        return this.waitForElementVisible('@emailTxt')
            .sendValue('@emailTxt', emails)
    },

    submitBranchForm: function(){
        return this.waitForElementClickable('@submitBtn')
            .click('@submitBtn')
            
    },

    openUpdateForm: function(){
        return this.waitForElementVisible('@updateIcon')
            .click('@updateIcon')
    },

    disableBranch: function(){
        return this.waitForElementVisible('@deleteIcon')
            .click('@deleteIcon')
            .waitForElementVisible('@yesConfirm')
            .click('@yesConfirm')
    }

};

module.exports = {

    elements: {

        branchBtn: {
            selector:"#add-branch-button"
          },

        updateIcon: {
            selector: "table>tbody>tr:first-child>td:last-child>span"
        },

        deleteIcon: {
            selector: "table>tbody>tr:first-child>td:last-child>i.red.trash.link.icon"
        },

        codeTxt: {
            selector: "#create-branch-form-branchCode"
        },

        nameTxt:{
            selector: "#create-branch-form-branchName"
        },

        addrTxt: {
            selector: "#create-branch-form-address"
        },

        emailTxt: {
            selector: "#create-branch-form-emails"
        },

        cbnBranchId : {
            selector: "input[name='cbnBranchCode']"
        },

        submitBtn: {
            selector: ".ui.icon.positive.left.labeled.button"
        },

        cancelBtn: {
            selector: "//button[text() = 'Cancel']",
            locateStrategy: 'xpath'
        },

        yesConfirm:{
            selector: "(//button[contains(@class, 'ui green inverted button') and text() = ' Yes'])[10]",
            locateStrategy: 'xpath'
        },

        noConfirm:{
            selector:".ui.red.inverted.button"
        },

        searchBox:{
            selector:"#search-input"
        },

        searchBtn:{
            selector: ".ui.icon.button"
        }

          
    },
    commands: [branchCommands,generalCommands]

};