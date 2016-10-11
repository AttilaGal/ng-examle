(function(){
  angular
				.module('color-panel')
				.factory('colorService', ColorService);
		
		ColorService.$inject = ['$q'];
		function ColorService($q){
				var service = {
						getColor: getColor
				};
				
				
				//implementations
				
				function getColor() {
						// return new Promise((resolve, reject ) => {
						//
						// 		});
						return $q(function(resolve, reject){
								var success = true;
								//logic
								setTimeout(function () {
										if(success){
												resolve([150, 200, 50, 1]);
										}else{
												reject();
										}
								}, 5000);
						});

						
				}

				return service;
		}
})();