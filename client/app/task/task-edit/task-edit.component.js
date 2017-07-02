'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './task-edit.routes';

export default angular.module('timetrackfinalApp.task-edit', [uiRouter])
  .config(routes)
  .name;
