import express from 'express';
import {
    signUp,
    signIn,
    signOut,
    currentUser
} from './controllers'
import { validateSignUp, validateSignIn } from './utils/validate'
import { validateReq } from './middleware/validateReq';

const router = express.Router();

router.post('/signup', validateSignUp, validateReq, signUp)
router.post('/signin', validateSignIn, validateReq, signIn)
router.post('/signout', signOut)
router.get('/currentUser', currentUser)

export default router;