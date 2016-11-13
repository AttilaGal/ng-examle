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
      return {'background-color': style};
    };

    vm.colorChangeCallback = function (text) {
      console.log('scope-inheritance in parent component: ' + text);
    }
  }

})();