(function () {
  'use strict';

  angular
    .module('color-panel')
    .component('colorPanel', {
      templateUrl: './color-panel/color-panel.template.html',
      controller: ColorPanel
    });

  ColorPanel.$inject = ['colorStore'];
  function ColorPanel(colorStore) {
    var vm = this;

    //set initial value to store
    colorStore.set([122, 231, 111, 1]);

    //retrieve data from store
    vm.backgroundColor = colorStore.get();



    //convert to proper css syntax
    vm.getBackgroundStyle = function () {
      var style = 'rgba(';
      vm.backgroundColor.map(function (c) {
        style += c + ',';
      });
      style = style.substr(0, style.length - 1);
      style += ')';
      return {'background-color': style};
    };
  }
  
})();