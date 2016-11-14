(function () {
  "use strict";

  angular
    .module('page-menu')
    .component('pageMenu', {
      templateUrl: './page-menu/page-menu.template.html',
      controller: PageMenuController
    });

  function PageMenuController() {
    var vm = this;
    
  }

})();