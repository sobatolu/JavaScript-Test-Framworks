'use strict';

exports.command = function(selector, callback){
    var self = this;

    self.waitForElementVisible(selector)

    self.element('css selector', selector, function(result){
        self.elementIdClear(result.value.ELEMENT);
    });    

     if (typeof callback === "function"){
        callback.call(self);
    }

   return this;
}