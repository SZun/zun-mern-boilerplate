import express from 'express';
import controller from '../controllers/Users';

const router = express.Router();

// @route POST api/users/register
// @desc Register user for an account
// @access Public
router.route('/register').post(controller.register);

// @route POST api/users/login
// @desc Log user in to their account
// @access Public
router.route('/login').post(controller.login);

export default router;
