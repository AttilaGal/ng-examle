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

  function ColorSelector() {
    //functionality would be added here
  }

})();