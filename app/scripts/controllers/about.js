'use strict';

/**
 * @ngdoc function
 * @name angularPropellerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularPropellerApp
 */
angular.module('angularPropellerApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
