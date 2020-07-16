(function () {
  'use strict';

  angular.module('NameCalculator', [])

  .controller('NameCalculatorController', function($scope)) {
    $scope.name="";
    $scope.totalvalue=0;

    $scope.displayNumeric= function(){
      var totalNamevalue = calculateNumericForString($scope.name); //get total totalvalue
      $scope.totalvalue= totalNamevalue;
    };

    function calculateNumericForString(string){
      var totalStringValue =0;
      for (var i=0; i<string.length; i++){
        totalStringValue+= string.charCodeAt(i);
      }
      return totalStringValue;
    }
  });

})()
