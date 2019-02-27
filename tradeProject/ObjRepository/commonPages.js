'use strict';

var userCommands = {

  clickUserMenu: function(){
    return this.waitForElementVisible('@currentUser')
        .click('@currentUser')
  },

  confirmUserLoggedIn: function(){
    return this.waitForElementVisible('@currentUser')
			
  },
  
  logoutUser: function(){
    return this.waitForElementVisible('@logoutLnk')
      .click('@logoutLnk')
  },

  clickChangePassword: function() {
    return this.waitForElementVisible('@changePasswordLnk')
      .click('@changePasswordLnk')
  },

  

};

var menuCommands = {

  clickConfig: function(){
    return this.waitForElementVisible('@menuLnk')
      .click('@menuLnk')
      .waitForElementVisible('@settingsLnk')
      .click('@settingsLnk')
      .waitForElementVisible('@configLnk')
      .click('@configLnk')
  },

  clickTemplate: function(){
    return this.waitForElementVisible('@menuLnk')
      .click('@menuLnk')
      .waitForElementVisible('@bankLnk')
      .click('@bankLnk')
      .waitForElementVisible('@templateLnk')
      .click('@templateLnk')
  },

  clickBranch: function(){
    return this.waitForElementVisible('@menuLnk')
      .click('@menuLnk')
      .waitForElementVisible('@bankLnk')
      .click('@bankLnk')
      .waitForElementVisible('@bankMgtLnk')
      .click('@bankMgtLnk')
  },

  clickAudit: function() {
    return this.waitForElementVisible('@menuLnk')
      .click('@menuLnk')
      .waitForElementVisible('@settingsLnk')
      .click('@settingsLnk')
      .waitForElementVisible('@auditLnk')
      .click('@auditLnk')
  },

  clickRejectReason: function() {
    return this.waitForElementVisible('@menuLnk')
      .click('@menuLnk')
      .waitForElementVisible('@staticModuleLnk')
      .click('@staticModuleLnk')
      .waitForElementVisible('@rejectReasonLnk')
      .click('@rejectReasonLnk')
  }


};

var commonCommands = {

  pageLoad: function(){
		return this.navigate();
	},

  validateError: function(errorMsg) {
		return this.waitForElementVisible('@errorBox')
			.verify.containsText('@errorBox', errorMsg)
  },
   
	validateMessage: function(msg) {
		return this.waitForElementVisible('@msgBox')
      .verify.containsText('@msgBox', msg)
      .waitForElementNotPresent('@msgBox')
  },

  validateMsg: function(msg){
    return this.waitForElementVisible('@msgBox2')
      .verify.containsText('@msgBox2', msg)
      .waitForElementNotPresent('@msgBox2')
  },
  
  waitForLoader: function(){
    return this.waitForElementNotPresent('@formLoader')
  },

 

  
};
  

module.exports = {

  url: function() { 
    return this.api.launchUrl + '/#';
  },

  elements: {
      
    currentUser: {
        selector:"//div[@class='menu']/div/span/span[2]",
        locateStrategy: 'xpath'
      },

    changePasswordLnk: {
      selector:"//span[text() = 'Change Password']",
      locateStrategy: 'xpath'
    },

    logoutLnk: {
      selector:"//span[text() = 'Logout']",
      locateStrategy: 'xpath'
    },

    menuLnk: {
      selector: "//span[normalize-space(.)='Menu']",
      locateStrategy: 'xpath'
    },

    settingsLnk: {
      selector: "//span[normalize-space(.)='Settings']",
      locateStrategy: 'xpath'
    },

    configLnk: {
      selector:"a[href*='configurations']"
    },

    correspondenceLnk: {
      selector:"a[href*='correspondence']"
    },

    staticModuleLnk: {
      selector: "//span[normalize-space(.)='Static Data Management']",
      locateStrategy: 'xpath'
    },

    rejectReasonLnk: {
      selector: "a[href*='rejection-reasons']"
    },

    templateLnk: {
      selector: "a[href*='template']"
    },

    bankLnk: {
      selector: "//span[normalize-space(.)='Bank']",
      locateStrategy: 'xpath'
    },

    bankMgtLnk: {
      selector: "a[href*='branch-management']"
    },

    auditLnk: {
      selector:"a[href*='audits']"
    },

    errorBox: {
		  selector:"//div/div[@class='ui negative message']/div",
		  locateStrategy: 'xpath'
    },

    msgBox: {
			selector:"//div/div[@class='ui positive message']/div",
		  locateStrategy: 'xpath'
    },

    msgBox2: {
      selector:"//div/span/div[@class='ui positive message']/div",
		  locateStrategy: 'xpath'
    },
    
    formLoader: {
      selector:'.ui .form .loading'
    }
    
  },
      
  commands:[userCommands,menuCommands,commonCommands]

  
};

