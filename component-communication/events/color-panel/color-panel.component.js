(function () {
  'use strict';

  angular
    .module('color-panel')
    .component('colorPanel', {
      templateUrl: './color-panel/color-panel.template.html',
      controller: ColorPanel
    });

  ColorPanel.$inject = ['$scope'];
  function ColorPanel($scope) {
    var vm = this;

    //retrieve data from store
    vm.backgroundColor = [122, 231, 111, 1];

    //listen to change event
    $scope.$on('color-change', function(event, newColors){
      vm.backgroundColor = newColors;
    });
    


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