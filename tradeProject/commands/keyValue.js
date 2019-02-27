'use strict';

exports.command = function(selector, keyArray, callback){
    var self = this;

    self.keys(keyArray, function(done){
        console.log(keyArray)
        self.waitForElementVisible(selector)
        self.keys(["\ue015","\ue007"]) //keypress code for keydown and enter
    });
    
    if (typeof callback === "function"){
        callback.call(self);
    }

   return this;
}