(function () {
  'use strict';

  angular
    .module('color-panel')
    .component('colorPanel', {
      templateUrl: './color-panel/color-panel.template.html',
      controller: ColorPanel
    });

  function ColorPanel() {
    var vm = this;

    vm.backgroundColor = [122, 231, 111, 1];

    vm.getBackgroundStyle = function () {
      var style = 'rgba(';
      vm.backgroundColor.map(function (c) {
        style += c + ',';
      });
      style = style.substr(0, style.length - 1);
      style += ')';
      console.log('STYLE: ' + style);
      return {'background-color': style};
    };

    vm.colorChangeCallback = function (colorArray) {
      vm.backgroundColor = colorArray;
    }
  }

})();