'use strict';

var changePasswordCommands = {

    changeForm: function(oldPassword, newPassword){
        return this.waitForElementVisible('@oldPassword')
            .clearValue('@oldPassword')
            .clearValue('@newPassword')
            .setValue('@oldPassword',oldPassword)
            .setValue('@newPassword',newPassword)
    },

    changePasswordBtn: function(){
        return this.waitForElementVisible( '@changeBtn')
        .click('@changeBtn')
    },

    cancelForm: function(){
        return this.waitForElementVisible( '@cancelBtn')
        .click('@cancelBtn')
    }


};

module.exports = {

    elements: {
        oldPassword: {
            selector:"input[name=oldPassword]"
        },

        newPassword: {
            selector:"input[name=newPassword]"
        },

        cancelBtn: {
            selector:"//button[text()='Cancel']",
            locateStrategy: 'xpath'
        },

        changeBtn: {
            selector:"//button[text()='Change password']",
            locateStrategy: 'xpath'
        }

    },

    commands: [changePasswordCommands]
};    