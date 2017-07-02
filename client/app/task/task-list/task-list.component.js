'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './task-list.routes';
export class TaskListComponent {
  /*@ngInject*/
  constructor($http) {
      this.$http = $http;
  }

  $onInit() {
      this.$http.get('/api/tasks').then((response) => {
          this.tasks = response.data;
      }).catch(() => {
          this.error = "Something went wrong";
      });
  }
}

export default angular.module('timetrackfinalApp.task-list', [uiRouter])
  .config(routes)
  .component('taskList', {
    template: require('./task-list.pug'),
    controller: TaskListComponent,
    controllerAs: 'taskListCtrl'
  })
  .name;
