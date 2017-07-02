'use strict';

import angular from 'angular';
import SettingsController from './settings.controller';

export default angular.module('timetrackfinalApp.settings', [])
  .controller('SettingsController', SettingsController)
  .name;
