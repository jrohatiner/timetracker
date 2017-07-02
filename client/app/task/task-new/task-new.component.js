'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');
const uiBootstrap = require('angular-ui-bootstrap');

import routes from './task-new.routes';

export class TaskNewComponent {
  /*@ngInject*/
  constructor($http) {
    this.$http = $http;
  }

  $onInit() {
      this.user = {};
  }

  addtask(task) {
      this.$http.post('/api/tasks', task).then(() => {
          this.user = {};
          this.success = "Saved";
      }).catch(() => {
          this.error = "Something went wrong";
      })
  }
}

export default angular.module('timetrackfinalApp.task-new', [uiRouter, uiBootstrap])
  .config(routes)
  .component('taskNew', {
    template: require('./task-new.pug'),
    controller: TaskNewComponent,
    controllerAs: 'taskNewCtrl'
  })
  .name;
