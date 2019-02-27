'use strict';

exports.command = function(callback){
    var self = this;
    var commonObj = self.page.commonPages();
    var login = self.page.loginPages();

    //Click user icon
    commonObj.clickUserMenu()
        .logoutUser()
    login.validatePage()
        

    if (typeof callback === "function"){
        callback.call(self);
    }
};