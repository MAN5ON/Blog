import { body } from "express-validator";

export const registerValidation = [
    body('email', 'Неверный формат почты').isEmail(),
    body('login','Логин должен состоять минимум из 5 символов').isLength({min: 5}),
    body('name', 'Имя должно состоять минимум из 3 букв').isLength({min: 3}),
    body('surname', 'Фамилия должна состоять минимум из 3 букв').isLength({min: 3}),
    body('password', 'Минимальная длина пароля - 5 символов').isLength({min: 5 }),
    body('avatarURL', 'Неверная ссылка на аватарку').optional().isURL(),
]