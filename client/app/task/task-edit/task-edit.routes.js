'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('task.edit', {
      url: '/:_id/edit',
      template: '<task-new></task-new>'
    });
}
