import { Router } from 'express';
import { Users, Wallets, Doctors } from '../models/models';
import { SignUp } from '../controllers/auth/SignUp';
import passport from 'passport';

import { TSignupForm } from '../types/types';

const router = Router();

// SignUp Route
router.post('/signup', SignUp);

// SignIn Route with PassportJS Authentication
router.post('/signin', passport.authenticate('local'), (request, response) => {
  response.status(200).json(request.user);
});

export default router;
