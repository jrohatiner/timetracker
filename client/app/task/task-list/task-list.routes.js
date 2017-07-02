'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('task.list', {
      url: '',
      template: '<task-list></task-list>'
    });
}
