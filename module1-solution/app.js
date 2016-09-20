(function () {
'use strict';

angular.module('itemsCount', [])

.controller('countItemsController', ["$scope",function (m) {
  m.itemsStr = "";
  m.message = "";
  m.styleFont = "";
  m.styleInput = "";

  m.displayNumeric = function () {
    m.totalValue = totalItems;
  };

  m.validateItemsIn = function(){
	var totalItems = countItemsForString();
	if(totalItems == 0){
		m.styleFont = "error";
		m.message = "Please enter data first";
		m.styleInput = "needed-field";
	}else{
		m.styleFont = "succes";
		m.styleInput = "succes-field";
		if(totalItems <= 3)
			m.message = "Enjoy!";
		else
			m.message = "Too much!";
	}
  }
  

  function countItemsForString(string) {
    var totalItems = 0;
	var items = m.itemsStr.split(",")
    for (var i = 0; i < items.length; i++) {
		 if(items[i].trim().length != 0)
			totalItems++;
    }
    return totalItems;
  }

}]);


})();
