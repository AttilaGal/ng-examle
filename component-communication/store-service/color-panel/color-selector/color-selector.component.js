(function () {
  'use strict';

  angular
    .module('color-panel')
    .component('colorSelector', {
      templateUrl: './color-panel/color-selector/color-selector.template.html',
      controller: ColorSelector
    });

  //inject the store
  ColorSelector.$inject = ['colorStore'];
  function ColorSelector(colorStore) {
    var vm = this;
    
    //retrieve data from store
    vm.colors = colorStore.get();

    //submit changes to store
    vm.colorsChanged = function () {
      colorStore.set(vm.colors);
    }
  }

})();