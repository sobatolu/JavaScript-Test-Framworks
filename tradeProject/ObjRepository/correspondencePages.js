'use strict';

var templateCommands = {

    openTemplateForm: function(){
        return this.waitForElementVisible('@createTemplateLnk')
            .click('@createTemplateLnk')
    },

    inputName: function(name){
        return this.waitForElementVisible('@nameField')
            .sendValue('@nameField',name)
    },

    selPurpose: function(purpose){
        return this.waitForElementVisible('@purposeDrpDown')
            .click('@purposeDrpDown')
            .setSelect('@purposeOption',purpose)
    },

    inputDescription: function(description){
        return this.waitForElementVisible('@descriptionField')
            .sendValue('@descriptionField', description)
    },

    clickCreateBtn: function(){
        return this.waitForElementVisible('@createBtn')
            .click('@createBtn')
    },

    clickCancelBtn: function(){
        return this.waitForElementVisible('@cancelBtn')
            .click('@cancelBtn')
    },

    navigateToLetters: function(){
        return this.waitForElementVisible('@lettersLnk')
            .click('@lettersLnk')
    },

    navigateToEmails: function(){
        return this.waitForElementVisible('@EmailLnk')
            .click('@EmailLnk')
    },

    clickDelete: function(){
        return this.waitForElementVisible('@deleteIcon')
            .click('@deleteIcon')
    },

    openUpdateForm: function(){
        return this.waitForElementVisible('@updateTemplate')
            .click('@updateTemplate')
    },

    clickUpdateBtn: function(){
        return this.waitForElementVisible('@updateBtn')
            .click('@updateBtn')
    }

    
};

module.exports = {
    elements: {
        createTemplateLnk: {
            selector:'#add-template-button'
        },
        nameField: {
            selector:'input[name=templateName]'
        },
        purposeDrpDown:{
            selector:"//div[@name='purpose']",
            locateStrategy: 'xpath'
        },
        purposeOption:{
            selector: "//div[@class='menu transition visible']/div/span",
            locateStrategy: 'xpath'
        },
        descriptionField:{
            selector:'input[name=templateDescription]'
        },
        createBtn:{
            selector:"//button[text() ='Create template']",
            locateStrategy: 'xpath'
        },
        cancelBtn:{
            selector:"//button[text() ='Cancel']",
            locateStrategy: 'xpath'
        },

        lettersLnk:{
            selector: "//div[@class='ui pointing secondary menu']/a[text()='Letters']",
            locateStrategy: 'xpath'
        },

        EmailLnk:{
            selector: "//div[@class='ui pointing secondary menu']/a[text()='Emails']",
            locateStrategy: 'xpath'
        },

        deleteIcon:{
            selector: "table>tbody>tr:first-child>td:last-child"
        },

        updateTemplate: {
            selector: "table>tbody>tr:first-child>td>span"
        },

        updateBtn:{
            selector:"//button[text() ='Update template']",
            locateStrategy: 'xpath'
        }

    },

    commands:[templateCommands]
};