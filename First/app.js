(function () {
'use strict';

  angular.module('myFirstApp',[])

  .controller('myFirstController', function($scope) {
    $scope.name="Jisu";
    $scope.sayHello=function(){
      return "Hello Coursera"
    };
  });

})();
