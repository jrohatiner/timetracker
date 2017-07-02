'use strict';

describe('Component: TaskNewComponent', function() {
  // load the controller's module
  beforeEach(module('timetrackfinalApp.task-new'));

  var TaskNewComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    TaskNewComponent = $componentController('task-new', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
