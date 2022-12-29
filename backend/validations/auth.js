import { body } from "express-validator";

export const registerValidation = [
    body('email').isEmail(),
    body('login').isLength({min: 5}),
    body('name').isLength({min: 3}),
    body('surname').isLength({min: 3}),
    body('password').isLength({min: 5 }),
    body('avatarURL').optional().isURL(),
]