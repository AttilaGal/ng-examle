(function () {
  "use strict";

  angular
    .module('page1')
    .component('page1', {
      templateUrl: './page1/page1.template.html',
      controller: Page1Controller
    });

  function Page1Controller() {
    var vm = this;
    
  }

})();