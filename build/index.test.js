'use strict';

var _ = require('.');

test('Returns Hello world.', function () {
  expect((0, _.app)()).toBe('Hello world.');
});