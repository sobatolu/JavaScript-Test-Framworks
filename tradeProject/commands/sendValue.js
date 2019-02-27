'use strict';

exports.command = function(selector, value, callback){
    
    var self = this;

    self.clearValue(selector);
    self.setValue(selector, value);
   
    if (typeof callback === "function"){
        callback.call(self);
    }

   return self;
  };