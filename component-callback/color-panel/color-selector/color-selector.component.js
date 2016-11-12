(function () {
  'use strict';

  angular
    .module('color-panel')
    .component('colorSelector', {
      bindings: {
        colors: '<',
        callback: '&'
      },
      templateUrl: './color-panel/color-selector/color-selector.template.html',
      controller: ColorSelector
    });

  function ColorSelector() {
    var vm = this;

    vm.colorsChanged = function () {
      vm.callback({colorArray: vm.colors})
    }
  }

})();