'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');
import TaskListComponent from './task-list/task-list.component';
import TaskNewComponent from './task-new/task-new.component';
import TaskEditComponent from './task-edit/task-edit.component';

import routes from './task.routes';

export default angular.module('timetrackfinalApp.task', [uiRouter, TaskNewComponent, TaskListComponent, TaskEditComponent])
  .config(routes)
  .name;
