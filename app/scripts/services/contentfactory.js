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
    var testOneContentUrl = 'stubs/testOne.json';
    var testTwoContentUrl = 'stubs/testTwo.json';


    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      },
      getTestOneContent: $resource(testOneContentUrl, {}, {
        testOneContent: {
          method: 'GET',
          isArray: true
        }
      }),
      getTestTwoContent: $resource(testTwoContentUrl, {}, {
        testTwoContent: {
          method: 'GET',
          isArray: true
        }
      })
    };
  });
