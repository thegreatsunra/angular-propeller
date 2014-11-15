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
        controller: 'AboutCtrl',
        abstract: 'true'
      })
      .state('about.stuff', {
        url: '/stuff',
        templateUrl: 'partials/about/stuff.html',
        controller: 'AboutCtrl'
      })
      .state('about.things', {
        url: '/things',
        templateUrl: 'partials/about/things.html',
        controller: 'AboutCtrl'
      })
      .state('about.moreThings', {
        url: '/more-things',
        templateUrl: 'partials/about/moreThings.html',
        controller: 'AboutCtrl'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      });
  });
