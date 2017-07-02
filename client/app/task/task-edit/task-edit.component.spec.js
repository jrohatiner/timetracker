'use strict';

describe('Component: TaskEditComponent', function() {
  // load the controller's module
  beforeEach(module('timetrackfinalApp.task-edit'));

  var TaskEditComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    TaskEditComponent = $componentController('task-edit', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
