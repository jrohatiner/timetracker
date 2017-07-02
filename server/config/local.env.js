'use strict';

// Use local.env.js for environment variables that will be set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN: 'http://localhost:3000',
  SESSION_SECRET: 'timetrackfinal-secret',

  FACEBOOK_ID: '322461414842875',
  FACEBOOK_SECRET: '9509bb16d6a6fca118858ddf60c505ba',
  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};
