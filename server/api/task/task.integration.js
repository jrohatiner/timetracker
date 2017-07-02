'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newTask;

describe('Task API:', function() {
  describe('GET /y', function() {
    var tasks;

    beforeEach(function(done) {
      request(app)
        .get('/y')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          tasks = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(tasks).to.be.instanceOf(Array);
    });
  });

  describe('POST /y', function() {
    beforeEach(function(done) {
      request(app)
        .post('/y')
        .send({
          name: 'New Task',
          info: 'This is the brand new task!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newTask = res.body;
          done();
        });
    });

    it('should respond with the newly created task', function() {
      expect(newTask.name).to.equal('New Task');
      expect(newTask.info).to.equal('This is the brand new task!!!');
    });
  });

  describe('GET /y/:id', function() {
    var task;

    beforeEach(function(done) {
      request(app)
        .get(`/y/${newTask._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          task = res.body;
          done();
        });
    });

    afterEach(function() {
      task = {};
    });

    it('should respond with the requested task', function() {
      expect(task.name).to.equal('New Task');
      expect(task.info).to.equal('This is the brand new task!!!');
    });
  });

  describe('PUT /y/:id', function() {
    var updatedTask;

    beforeEach(function(done) {
      request(app)
        .put(`/y/${newTask._id}`)
        .send({
          name: 'Updated Task',
          info: 'This is the updated task!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedTask = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedTask = {};
    });

    it('should respond with the updated task', function() {
      expect(updatedTask.name).to.equal('Updated Task');
      expect(updatedTask.info).to.equal('This is the updated task!!!');
    });

    it('should respond with the updated task on a subsequent GET', function(done) {
      request(app)
        .get(`/y/${newTask._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let task = res.body;

          expect(task.name).to.equal('Updated Task');
          expect(task.info).to.equal('This is the updated task!!!');

          done();
        });
    });
  });

  describe('PATCH /y/:id', function() {
    var patchedTask;

    beforeEach(function(done) {
      request(app)
        .patch(`/y/${newTask._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Task' },
          { op: 'replace', path: '/info', value: 'This is the patched task!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedTask = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedTask = {};
    });

    it('should respond with the patched task', function() {
      expect(patchedTask.name).to.equal('Patched Task');
      expect(patchedTask.info).to.equal('This is the patched task!!!');
    });
  });

  describe('DELETE /y/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/y/${newTask._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when task does not exist', function(done) {
      request(app)
        .delete(`/y/${newTask._id}`)
        .expect(404)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });
  });
});
