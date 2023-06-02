import express from 'express';
import {
    signUp,
    signIn,
    signOut,
    currentUser
} from './controllers'
import { validateSignUp, validateSignIn } from './utils/validate'
import { validateReq } from './middleware/validateReq';
import currentUserMiddleware from './middleware/currentUserMiddleware';
import requireAuth  from './middleware/requireAuth';

const router = express.Router();

router.post('/signup', validateSignUp, validateReq, signUp)
router.post('/signin', validateSignIn, validateReq, signIn)
router.get('/signout', signOut)
router.get('/currentUser', currentUserMiddleware, requireAuth, currentUser)

export default router;