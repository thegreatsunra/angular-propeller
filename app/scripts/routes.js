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
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
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
