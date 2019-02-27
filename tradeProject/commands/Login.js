'use strict';


exports.command = function(username, password, callback){

    var self = this;
    var login = self.page.loginPages();
    var commonObj = self.page.commonPages();

    //launch browser and navigate to app
    commonObj.pageLoad() 

    //Login with valid credentials
    login.fillForm(username,password)
        .clickSubmit()

    //confirm user is successfully logged in
   commonObj.confirmUserLoggedIn()

      if (typeof callback === "function"){
         callback.call(self);
     }

    return this;
};