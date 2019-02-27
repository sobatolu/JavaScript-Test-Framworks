'use strict';

var generalCommand = {

	validatePage: function(){
		return this.waitForElementVisible('@usersLnk')
			.verify.visible('@usersLnk')
			.verify.visible('@rolesLnk')
	},

	createUser: function(){
		return this.waitForElementClickable('@createUserBtn') 
			.click('@createUserBtn')
	},

	cancelCreation: function(){
		return this.waitForElementClickable('@cancelBtn') 
			.click('@cancelBtn')
	},

	pause: function(time){//to use pause in pages
		return this.api.pause(time)
	}
};

var userCommands = {
	
	clearSearch: function(){
		return this.waitForElementVisible('@clrBtn') 
			.click('@clrBtn')
			.waitForElementNotPresent('@clrBtn')
	},

	editUser: function(){
		return this.waitForElementVisible('@userEdit') 
			.click('@userEdit')
			.waitForElementVisible('@userDetails')
	},

	userUpdate: function(){
		return this.click('@updateBtn')
	},

	sendActivationLnk: function(){
		return this.waitForElementVisible('@activationLnk') 
			.click('@activationLnk')
	},

	searchUser: function(user) {
		return this.waitForElementVisible('@userSearchBox') 
			.sendValue('@userSearchBox', user)
			.click('@userSearchBtn')
			.waitForElementVisible('@clrBtn')
	},

	editType: function(userType){ 
		return this.waitForElementClickable('@editType')
			.click('@editType')
			.setSelect('@editTypeOptions', userType)
	},

	editRole: function(userRole){
		return this.waitForElementClickable('@editType')
			.click('@editRole')
			.setSelect('@editRoleOptions',userRole)
	},

	editBranch: function(branch){
	 return this.waitForElementClickable('@branchSel')
			 .clearKey('@branchSel')
			 .keyValue('@branchResults', branch)
	}



};

var DbcreateCommands = {

	createForm: function(){
		return this.waitForElementVisible('@createUserForm')
			.click('@createUserForm')
		
	},

	importForm: function(){
		return this.waitForElementVisible('@importUserForm')
			.click('@importUserForm')

	},

	fillTextField: function(username, email) {
		return this.waitForElementVisible('@usernameField')
			.sendValue('@usernameField', username)
			.sendValue('@emailField',email)
	},

	selectType: function(userType){ 
		return this.waitForElementNotPresent('@formLoader')
			.click('@userTypeSel')
			.setSelect('@typeOptions', userType)
	},

	selectRole: function(userRole){
		return this.waitForElementNotPresent('@formLoader')
			.click('@roleSel')
			.setSelect('@roleOption',userRole)
	},

	selectBranch: function(branch){
	 return this.waitForElementNotPresent('@formLoader')
			.click('@branchSel')
			.keyValue('@branchResults', branch)
	},
	emptyBranch: function(){
		return this.click('@branchSel')
	}

};

var ldapcreateCommands = {
	
		ldapUsername: function(value){
			return this.waitForElementVisible('@importField') 
				.sendValue('@importField',value)
		},

		importUser: function() {
			return this.waitForElementClickable('@importUserBtn') 
				.click('@importUserBtn')
		},
	
		verifyImport: function(text){
			return this.waitForElementVisible('@userDetails')
				.verify.containsText('@userDetails', text)
		},

		ldapuserType: function(userType){
			return this.waitForElementClickable('@importUserType') 
				.click('@importUserType')
				.setSelect('@importtypeOptions', userType)
		},

		ldapuserRole: function(userRole){
			return this.waitForElementClickable('@importRole') 
				.click('@importRole')
				.setSelect('@importroleOptions', userRole)
		},

		ldapBranch: function(branch){
			return this.waitForElementClickable('@importBranch')
				   .click('@importBranch')
				   .keyValue('@branchResults', branch)
		   },
	   
	
	
	};

module.exports = {

	elements: {
	//General elements
		usersLnk: {
			selector: "//a[text()='Users']",
			locateStrategy: 'xpath'
		},
		rolesLnk: {
			selector: "//a[text()='Roles']",
			locateStrategy: 'xpath'
		},
		cancelBtn: {
            selector:"//button[text()='Cancel']",
            locateStrategy: 'xpath'
		},

		formLoader: {
			selector:'.ui .form .loading'
		},
	//User search elements	
		userSearchBtn: {
			selector: ".input >button"
		},

		userSearchBox: {
			selector: '#search-input'
		},
		clrBtn: {
			selector: '#clear-search-btn'
		},

	//User update/management
		userEdit: {
			selector: "#edit-user-"
		},
		enableToggle: {
			selector: "//input[@type='checkbox']",
			locateStrategy: 'xpath'
		},

		activationLnk: {
			selector: "//a[text()='Resend Link']",
			locateStrategy: 'xpath'
		},

		editType: {
			selector: '#edit-user-form-usertype'
		},

		editTypeOptions: {
			selector:".//*[@id='edit-user-form-usertype']/div[2]/div/span",
			locateStrategy: 'xpath'
		},

		editRole:{
			selector: "#edit-user-form-role"
		},

		editRoleOptions: {
			selector:".//*[@id='edit-user-form-role']/div[2]/div/span",
			locateStrategy: 'xpath'
		},

		updateBtn: {
			selector:"//button[text()='Update']",
            locateStrategy: 'xpath'
		},

	//Db user creation
		createUserForm: { 
			selector: '#add-user-button'
		},
		usernameField: {
			selector: 'input[name = username]'
		},

		emailField: {
			selector: 'input[name = email]'
		},

		userTypeSel: {
			selector: "#create-user-form-usertype"
		},

		typeOptions: {
			selector: ".//*[@id='create-user-form-usertype']/div[2]/div/span",
			locateStrategy: 'xpath'
		},

		roleSel: {
			selector: '#create-user-form-role'
		},

		roleOption: {
			selector: ".//*[@id='create-user-form-role']/div[2]/div/span",
			locateStrategy: 'xpath'
		},

		branchSel: {
			selector:".ui.icon.input > input"
			
		
		},

		branchResults: {
			selector: 'div.search>div.results>div.result'
		},
		createUserBtn: {
			selector:"//button[text()='Create user']",
            locateStrategy: 'xpath'
		},

	//ldap user creation
		importUserForm: {
			selector: '#import-user-btn'
		},
		
		importUserBtn: {
			selector:"//button[text()='Import user']",
            locateStrategy: 'xpath'
		},

		importUserType: {
			selector: '#import-user-form-usertype'
		},

		importtypeOptions: {
			selector: ".//*[@id='import-user-form-usertype']/div[2]/div/span",
			locateStrategy: 'xpath'
		},

		importRole: {
			selector: '#import-user-form-role'
		},

		importroleOptions: {
			selector: ".//*[@id='import-user-form-role']/div[2]/div/span",
			locateStrategy: 'xpath'
		},

		importBranch: {
			selector: '#import-user-form-branch'
		},

		importField: {
			selector: 'input[name = username]'
		},

		userDetails: {
			selector: '.ui.message .content'
		}

	},
	
	commands: [generalCommand,userCommands,DbcreateCommands,ldapcreateCommands]
};
