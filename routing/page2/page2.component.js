(function () {
  "use strict";

  angular
    .module('page2')
    .component('page2', {
      templateUrl: './page2/page2.template.html',
      controller: Page2Controller
    })
    .config(function ($stateProvider) {
      $stateProvider
        .state('page2', {
          url: '/page2',
          component: 'page2'
        })
    });

  function Page2Controller() {
    var vm = this;
    
  }

})();