(function () {
  "use strict";

  angular.module("routingExample", [
      'page1',
      'page2',
      'page3',
      'page-menu',
      'ui.router'
    ])
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('page1', {
          url: '/page1',
          component: 'page1'
        })
        .state('page3', {
          url: '/page3',
          component: 'page3'
        });

      $urlRouterProvider.otherwise('/page1');

    });

})();