'use strict';

/**
 * @ngdoc overview
 * @name angularPropellerApp:routes
 * @description
 * # angularPropellerApp:routes
 *
 * Routing module of the application.
 */
angular
  .module('routes', [
    'ui.router'
  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      });
  });
