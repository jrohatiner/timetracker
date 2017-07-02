'use strict';

import express from 'express';
import * as controller from './task.controller';
import * as auth from '../../auth/auth.service';

const router = express.Router();

router.get('/', auth.isAuthenticated(), controller.index);
router.get('/all', auth.hasRole('admin'), controller.all);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/', auth.isAuthenticated(), controller.create);
router.put('/:id', auth.isAuthenticated(), controller.upsert);

// router.patch('/:id', auth.isAuthenticated(), controller.patch);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);

module.exports = router;
