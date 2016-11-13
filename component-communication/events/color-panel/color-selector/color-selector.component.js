(function () {
  'use strict';

  angular
    .module('color-panel')
    .component('colorSelector', {
      bindings: {
        colors: '<'
      },
      templateUrl: './color-panel/color-selector/color-selector.template.html',
      controller: ColorSelector
    });

  //inject the store
  ColorSelector.$inject = ['$rootScope'];
  function ColorSelector($rootScope) {
    var vm = this;

    //submit changes to store
    vm.colorsChanged = function () {
      $rootScope.$broadcast('color-change', vm.colors);
    }
  }

})();