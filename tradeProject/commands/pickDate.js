'use strict';

exports.command = function(date, callback){

    var self = this;
    var dateArr = date.split(',');
    var day = dateArr[0];
    var month = dateArr[1].trim();
    var currentMonth;

    selectDate(self,month)
  
    //click stated day
     function selectDay(self, day){
        self
            .useXpath() // every selector now must be xpath
            .click("//div[@class='react-datepicker__month']/div[@class='react-datepicker__week']/div[text() = '"+ day + "']")
           
    }

    //navigate to selected month & year before picking day
    function selectDate(self, month){
        
        var count = 0;
        self
            .useXpath().getText("//div[@class='react-datepicker__current-month react-datepicker__current-month--hasYearDropdown react-datepicker__current-month--hasMonthDropdown']", function(result) {
                currentMonth= result.value;
            })

            .perform(function(){
                if (month !== currentMonth){
                    self
                        .useXpath()
                        .click("//button[@class='react-datepicker__navigation react-datepicker__navigation--previous']")
                    selectDate(self,month)
                
                }
                else{
                   //select day
                    selectDay(self, day)
                }
            })

    }
 
    if (typeof callback === "function"){
        callback.call(self);
    }

   return this;


};