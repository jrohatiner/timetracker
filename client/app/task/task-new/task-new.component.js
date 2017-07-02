'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');
const uiBootstrap = require('angular-ui-bootstrap');

import routes from './task-new.routes';

export class TaskNewComponent {
  /*@ngInject*/
  constructor($http, $state) {
      this.$http = $http;
      this.$state = $state;
  }

  $onInit() {
      this.user = {};
      if (this.$state.is('task.edit')) this.getOne();
  }

  getOne(){
      this
          .$http
          .get(`/api/tasks/${this.$state.params._id}`)
          .then(({ data: { name, from, to } }) => (this.user = { name, from, to }));
  }

  addtask(task) {
      (this.$state.is('task.edit')
          ? this.$http.put(`/api/tasks/${this.$state.params._id}`, task)
          : this.$http.post('/api/tasks', task)
      ).then(() => {
          if (!this.$state.is('task.edit')) this.user = {};
          this.$state.go('task.list');
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
