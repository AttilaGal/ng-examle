(function () {
    'use strict';
    
    angular
        .module('color-panel')
        .component('colorPanel', {
            templateUrl: './color-panel/color-panel.template.html',
            controller: ColorPanel
        });

				ColorPanel.$inject = ['colorService'];
    function ColorPanel(colorService){
        var vm = this;
      		vm.backgroundColor = [0,0,0,1];

        colorService
										.getColor()
										.then(
												function success(data){
														vm.backgroundColor = data;
												},function errorr(err) {

												}
										);

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

        vm.colorChangeCallback = function(colorArray){
            vm.backgroundColor = colorArray;
        }
    }
    
})();