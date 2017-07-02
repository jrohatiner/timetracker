'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('task.new', {
      url: '/new',
      template: '<task-new></task-new>'
    });
}
