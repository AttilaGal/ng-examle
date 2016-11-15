(function () {
  "use strict";

  angular
    .module('page2')
    .component('page2', {
      templateUrl: './page2/page2.template.html',
      controller: Page2Controller,
      bindings: {
        paramValue: '@'
      }
    })
    .config(function ($stateProvider) {
      $stateProvider
        .state('page2', {
          url: '/page2/:text',
          component: 'page2',
          resolve: {
            paramValue: function($stateParams){
              return $stateParams.text || 'defaultValue';
            }
          }
        })
    });

  function Page2Controller() {
    var vm = this;
    
  }

})();