'use strict';

/**
 * @ngdoc service
 * @name angularPropellerApp.contentFactory
 * @description
 * # contentFactory
 * Factory in the angularPropellerApp.
 */
angular.module('angularPropellerApp')
  .factory('contentFactory', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
