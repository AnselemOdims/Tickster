import express from 'express';
import {
    signUp,
    signIn,
    signOut,
    currentUser
} from './controllers'
import { validateSignUp } from './middleware'

const router = express.Router();

router.post('/signup', validateSignUp, signUp)
router.post('/signin', signIn)
router.post('/signout', signOut)
router.get('/currentUser', currentUser)

export default router;