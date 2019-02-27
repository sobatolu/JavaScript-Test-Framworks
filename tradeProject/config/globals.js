'use strict';

//Defines global variables & functions

//to use nightwatch reporter
var HtmlReporter = require('nightwatch-html-reporter');
var reporter = new HtmlReporter({
	openBrowser: true,
	reportsDirectory: './reports'
});

module.exports = {
  
  reporter: reporter.fn,

  waitForConditionTimeout: 999999,//Timeout duration  waitForConditionPollInterval: 300,//Duration between two checks

  abortOnAssertionFailure: false,//Continue test after failure

  before: function (done) {
      var chai = require('chai-nightwatch');
      chai.use(require('dirty-chai'));
      done();
  },
  
  //Admin login test data
  Adminusername: 'adminuser',
  Branchusername: 'tc.user',
  Auditusername: 'trade2.user',
  password: 'password13',
  
  //Change Password test data
  Oldpassword: 'password13',
  Newpassword: 'password14',

  //Create User test data
  username:'testuser',
  email:'testdbuser@test.com',
  userType: 'Branch Portal Ops',
  userRole: 'ROLE_BranchOps',
  branch: ["u","b","a"],
  ldapuser: 'Oluwaseyi.Obatolu',
  ldapusername: 'Oluwaseyi Obatolu',

  //User Management test data
  user: 'manadagersdwio',

  //Role management test data
  roleName: 'testRole',
  roleDescription: 'this is for automated test; please leave alone',
  roleNameUpdate: 'testroleupdate',

  //App Parameters test data
  configKey: 'testConfig',
  configValue: 'testValue',
  configDescription: 'This is a test parameter; pls leave alone',
  configvalueUpdate: 'testMalue',
  configDescripUpdate: 'an update was made',

  //Branch management test data
  branchCode: '123094567',
  branchName: 'testBranch',
  branchAddr: 'test address',
  branchEmail: 'testemail@test.com',

  //Template test data
  templateName: 'testTemplate',
  templatePurpose: 'Approval for Cancellation',
  templateDescription: 'For test; leave alone'

  //To run before each testsuite
  
};