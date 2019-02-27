'use strict';

var assert = require('assert');

var RejectReasonsCommands = {

    openCreateForm: function(){
        return this.waitForElementClickable('@createLnk')
            .angryClick('@createLnk')
    },

    inputName: function(name){
        return this.waitForElementVisible('@modalNameTxt')
            .sendValue('@modalNameTxt', name)           
    },

    selectEvent: function(event){
        return this.waitForElementVisible('@modalEventTxt')
            .click('@modalEventTxt')
            .setSelect('@modalEOption', event)
    },

    selectDocType: function(docType){
        return this.waitForElementClickable('@modalTypeTxt')
            .click('@modalTypeTxt')
            .keyValue('@modalTypeResult', docType)
    },

    clickCheckbox: function(){
        return this.click('@notifyChk')
    },

    saveForm: function() {
        return this.click('@saveBtn')
    },

    openUpdateForm: function(){
        return this.waitForElementVisible('@editIcon')
            .click('@editIcon')
    },

    updateForm: function() {
        return this.waitForElementClickable('@updateBtn')
            .click('@updateBtn')
    },

    clearForm: function(){
        return this.clearValue('@modalNameTxt')
    },

    searchForm: function(name){
        return this.waitForElementVisible('@nameTxt')
            .sendValue('@nameTxt',name)
           // .click('@modalEventTxt')
            //.setSelect('@modalEOption', event)
           // .click('@modalTypeTxt')
           // .keyValue('@modalTypeResult', docType)
            .click('@searchBtn')
    }

};

var GeneralCommands = {

    verifyMsg: function(msg){
        return this.verify.visible("div.content",msg)
            //.verify.visible('div.content').text.to.not.contain(msg)
    },

    clickCancel: function(){
        return this.click('@cancelBtn')
    }
};

module.exports = {
    elements: {
        createLnk: {
            selector:"//button[text() ='Create New']",
            locateStrategy: 'xpath'
        },

        nameTxt: {
            selector: "input[name='name']"
        },

        modalNameTxt: {
            selector: "//div[@data-reactroot][@class = 'ui tiny modal transition visible active']/div[@class='content']/form/div/div/input[@name='name']",
            locateStrategy: 'xpath'
        },

        modalEventTxt: {
            selector: "//div[@data-reactroot][@class = 'ui tiny modal transition visible active']/div[@class='content']/form/div/div[@name='event']",
            locateStrategy: 'xpath'
        },

        modalTypeTxt: {
            selector: "//div[@data-reactroot][@class = 'ui tiny modal transition visible active']/div[@class='content']/form/div/div[@name='documentTypeId']",
            locateStrategy: 'xpath'
        },

        modalEOption: {
            selector: "//div[@data-reactroot][@class = 'ui tiny modal transition visible active']/div[@class='content']/form/div/div[@name='event']/div[@class='menu transition visible']/div/span",
            locateStrategy: 'xpath'
        },

        modalTypeResult: {
            selector: "//div[@data-reactroot][@class = 'ui tiny modal transition visible active']/div[@class='content']/form/div/div[@name='documentTypeId']/div[2]/div",
            locateStrategy: 'xpath'
        },

        eventSel: {
            selector: "div[name='event']"
        },

        docTypeSel: {
            selector: "div[name='documentTypeId']"
        },

        searchBtn: {
            selector: "//button[text() = 'Search']",
            locateStrategy: 'xpath'
        },

        editIcon: {
            selector: "table>tbody>tr:first-child>td:last-child>span>i[title='Edit']"
        },

        deleteIcon: {
            selector:"table>tbody>tr:first-child>td:last-child>span:nth-child(2)"
        },

        notifyChk: {
            selector: "div[class='ui checkbox']>label"
        },

        cancelBtn: {
            selector: "//button[text()='Cancel']",
            locateStrategy: 'xpath'
        },

        updateBtn: {
            selector: "//button[text()='Update']",
            locateStrategy: 'xpath'
        },

        saveBtn: {
            selector: "//button[text()='Save']",
            locateStrategy: 'xpath'
        }
        
    },

    commands:[RejectReasonsCommands,GeneralCommands]
};