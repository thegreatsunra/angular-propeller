'use strict';

/**
 * @ngdoc service
 * @name angularPropellerApp.contentFactory
 * @description
 * # contentFactory
 * Factory in the angularPropellerApp.
 */
angular.module('angularPropellerApp')
  .factory('contentFactory', function ($resource) {
    // Service logic
    // ...

    var meaningOfLife = 42;
    var testContentUrl = 'stubs/test.json';

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      },
      getTestContent: $resource(testContentUrl, {}, {
        testContent: {
          method: 'GET',
          isArray: true
        }
      })
    };
  });
