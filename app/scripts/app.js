'use strict';

/**
 * @ngdoc overview
 * @name angularPropellerApp
 * @description
 * # angularPropellerApp
 *
 * Main module of the application.
 */
angular
  .module('angularPropellerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap',
    'routes'
  ])
  .config(function($urlRouterProvider) {
    $urlRouterProvider
      .otherwise('/');
  });
