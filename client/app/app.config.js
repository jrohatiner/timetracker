'use strict';

export function routeConfig($urlRouterProvider, $locationProvider) {
  'ngInject';
  $urlRouterProvider.when('', '/tasks');
  $urlRouterProvider.otherwise('/tasks');

  $locationProvider.html5Mode(true);
}
