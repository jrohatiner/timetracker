'use strict';

describe('Component: TaskListComponent', function() {
  // load the controller's module
  beforeEach(module('timetrackfinalApp.task-list'));

  var TaskListComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    TaskListComponent = $componentController('task-list', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
