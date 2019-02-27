'use strict';

var configCommands = {

    clickCreate: function(){
        return this.waitForElementVisible('@createLnk')
            .click('@createLnk')
    },

    createForm: function(key, value, decrip){
        return this.waitForElementVisible('@createBtn')
            .sendValue('@keyField', key)
            .sendValue('@valueField', value)
            .sendValue('@descripField', decrip)
    },

    createConfig: function(){
        return this.waitForElementVisible('@createBtn')
            .click('@createBtn')
    },

    cancelCreate: function(){
        return this.waitForElementVisible('@cancelBtn')
            .click('@cancelBtn')
    },

    validatePage: function(){
        return this.waitForElementVisible('@createLnk')
            .verify.visible('@configTable')
    },

    validateFrame: function(){
        return this.waitForElementVisible('@createBtn')
            .verify.visible('@keyField')
            .verify.visible('@valueField')
            .verify.visible('@descripField')         
    },

    editConfig: function(){
        return this.waitForElementVisible('@editIcon')
            .click('@editIcon')
    },

    updateForm: function(value,description){
        return this.waitForElementVisible('@updateBtn')
            .sendValue('@editValue', value)
            .sendValue('@editDescription', description)
    },

    updateConfig: function(){
        return this.waitForElementVisible('@updateBtn')
            .submitForm('@updateBtn')
    },

    deleteSysConfig: function(){
        return this.waitForElementVisible('@systemDelete')
            .click('@systemDelete')
            .waitForElementVisible('@yesBtn')
            .click('@yesBtn')       
    },

    deleteConfig: function(){
        return this.waitForElementClickable('@deleteIcon')
            .click('@deleteIcon')
            .waitForElementVisible('@yesBtn')
            .click('@yesBtn')   
    },

    clearTextarea: function(){
        return this.waitForElementVisible('@updateBtn')
            .clearKey('@editValue')
            .clearKey('@editDescription')
    }

};

module.exports = {
    elements: {
        createLnk: {
            selector:'#create-config'
        },
        keyField: {
            selector:'#create-config-form-name'
        },
        valueField:{
            selector:'#create-config-form-value'
        },
        descripField:{
            selector:'#create-config-form-description'
        },
        createBtn:{
            selector:"//button[text() ='Create Config']",
            locateStrategy: 'xpath'
        },
        cancelBtn:{
            selector:"//button[text() ='Cancel']",
            locateStrategy: 'xpath'
        },

        configTable: {
            selector: 'table>tbody>tr>td'
        },

        editIcon: {
            selector: 'table>tbody>tr:first-child>td:last-child>span>i#edit-config-undefined'
        },

        deleteIcon: {
            selector: 'table>tbody>tr:first-child>td:last-child>i.red.trash.link.icon'
        },

        systemDelete: {
            selector:"//table/tbody/tr[last()]/td/span/i[starts-with(@id,'confirm-delete-')]",
            locateStrategy: 'xpath'
        },

        confirmModal:{
            selector:"div.ui.mini.modal.transition.visible"
        },

        yesBtn: {
            selector: "(//button[contains(@class, 'ui green inverted button') and text() = ' Yes'])[10]",
            locateStrategy: 'xpath'
        },

        noBtn: {
            selector: "//button[contains(@class, 'ui red inverted button') and text() = ' No']",
            locateStrategy: 'xpath'
        },

        updateBtn: {
            selector: "//button[text() ='Update config']",
            locateStrategy: 'xpath'
        },

        editValue: {
            selector: 'textarea[name=cvalue]'
        },

        editDescription: {
            selector: 'input[name=description]'
        }
    },

    commands:[configCommands]
};