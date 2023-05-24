import express from 'express';

const router = express.Router();

router.post('/signup')
router.post('/signin')
router.post('/signout')
router.get('/currentUser')

export default router;