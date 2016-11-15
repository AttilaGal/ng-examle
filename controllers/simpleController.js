(function () {
  "use strict";

  angular.module('ControllerExample')
    .controller('simpleController', SimpleController);

  function SimpleController() {
    //logic comes here
    var vm = this;

    vm.clickHandler = function(){
      alert('Controller is working!');
    }
  }
})();