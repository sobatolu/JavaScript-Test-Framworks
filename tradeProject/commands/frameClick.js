'use strict';

exports.command = function(selector, callback){
    var self = this;

    self.waitForElementVisible(selector)

    self.element('xpath', selector, function(result){
        self.elementIdClick(result.value.ELEMENT);
    });    

     if (typeof callback === "function"){
        callback.call(self);
    }

   return this;
}