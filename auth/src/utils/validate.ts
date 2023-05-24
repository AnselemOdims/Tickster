import { body } from 'express-validator';

 export const validateSignUp = [
    body('name')
        .trim()
        .isLength({ min: 5 })
        .withMessage('Name must be at least 5 characters long'),
    body('email')
        .isEmail()
        .normalizeEmail()
        .withMessage('Email must be valid'),
    body('password')
        .trim()
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long')
]
