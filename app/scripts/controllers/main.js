'use strict';

/**
 * @ngdoc function
 * @name angularPropellerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularPropellerApp
 */
angular.module('angularPropellerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
