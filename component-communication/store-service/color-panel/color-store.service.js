(function () {
  "use strict";

  angular
    .module('color-panel')
    .factory('colorStore', ColorStore);

  function ColorStore() {
    var store = {};
    var service = {
      get: get,
      set: set
    };
    return service;

    //function implementations
    function get() {
      return store;
    }

    function set(data){
      store = data;
    }
    
  }
})();