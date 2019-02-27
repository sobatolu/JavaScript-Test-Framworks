'use strict';

var generalCommands = {

    validatePage: function(){
		return this.waitForElementVisible('@createRoleForm')
                .verify.visible('@roleTab')
                
	},

    goToRole: function(){
        return this.waitForElementVisible('@roleTab')
            .click('@roleTab')
            .waitForElementVisible('@createRoleForm')
    },
    
    cancel: function(){
        return this.waitForElementClickable('@cancelBtn')
            .click('@cancelBtn')
    },

    extClick: function(){
        return this.click('.actions')
    }

};

var roleCommands = {

    openCreateForm: function(){
        return this.waitForElementVisible('@createRoleForm')
            .click('@createRoleForm') 
    },

    fillForm: function(roleName, description){
        return this.waitForElementClickable('@roleNameField')
            .sendValue('@roleNameField',roleName)
            .sendValue('@roleDespField', description)
    },

    createRole: function(){
        return this.waitForElementClickable('@createRoleBtn')
            .click('@createRoleBtn')
    },

    openUpdateForm: function() {
        return this.waitForElementClickable('@editIcon')
           .click('@editIcon')
             
    },

    updateRole: function(){
        return this.waitForElementVisible('@roleUpdateBtn')
            .click('@roleUpdateBtn')
    },

    clearForm: function(){
        return this.waitForElementVisible('@roleNameField')
            .clearValue('@roleNameField')
            .clearValue('@roleDespField')
    }


};

module.exports = {

    elements: {
        
        roleTab: {
            selector: "//a[text()='Roles']",
            locateStrategy: 'xpath'
        },

        createRoleForm: {
            selector: "//button[text()='Create']",
            locateStrategy: 'xpath'
        },

        roleNameField: {
            selector: 'input[name=name]'
        },

        roleDespField: {
            selector: 'input[name=description]'
        },

        roleUpdateBtn: {
            selector: "//button[text() = 'Update role']",
            locateStrategy: 'xpath'
        },

        cancelBtn: {
            selector: "//button[text() = 'Cancel']",
            locateStrategy: 'xpath'
        },

        createRoleBtn: {
            selector: "//button[text() = 'Create role']",
            locateStrategy: 'xpath'
        },

        permissionsIcon:{
            selector: '#Manager O-permissions'
        },

        editIcon: {
            selector:'table>tbody>tr:nth-child(4)>td:nth-child(3)>span >span'// ".//*[@id='edit-role-testRole']",//
            //locateStrategy: 'xpath'
        }


    },
    commands:[generalCommands,roleCommands]
};