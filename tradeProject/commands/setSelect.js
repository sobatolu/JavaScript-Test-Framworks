'use strict';

exports.command = function(selector,selValue,callback){
    var self = this;
    var fullPath;
    
    self.waitForElementVisible(selector)
    self.elements('xpath',selector,function(result){
           
            result.value.forEach(function(op){
                
                self.elementIdText(op.ELEMENT, function(res){
                    if(res.value == selValue){
                        fullPath = selector + "[text()='" + selValue + "']"
                        console.log(fullPath)
                        self.click(fullPath)
                    }
                    
                });

            });
          
    });
   

 

    if (typeof callback === "function"){
        callback.call(self);
    }

    return this;
};

