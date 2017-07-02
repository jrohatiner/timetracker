'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('task', {
      url: '/tasks',
      abstract: true,
      template: '<div ui-view=""></div>',
    });
}
