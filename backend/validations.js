import { body } from "express-validator";

export const registerValidation = [
    body('email', 'Неверный формат почты').isEmail(),
    body('login', 'Логин должен состоять минимум из 5 символов').isLength({ min: 5 }),
    body('name', 'Имя должно состоять минимум из 3 букв').isLength({ min: 3 }),
    body('surname', 'Фамилия должна состоять минимум из 3 букв').isLength({ min: 3 }),
    body('password', 'Минимальная длина пароля - 5 символов').isLength({ min: 5 }),
    body('avatarURL', 'Неверная ссылка на аватарку').optional().isURL(),
    body('userInfo', 'Максимальная длина - 300 символов').optional().isLength({ max: 300 })
]

export const loginValidation = [
    body('email', 'Неверный формат почты').isEmail(),
    body('password', 'Минимальная длина пароля - 5 символов').isLength({ min: 5 }),
]

export const createPostValidation = [
    body('title', 'Введите заголовок статьи').isLength({ min: 3 }),
    body('intro', 'Введите текст статьи').isLength({ min: 5 }),
    body('introIMG', 'Неверная ссылка на изображение').optional().isURL(),
    body('postArr', 'Максимальное количество элементов для статьи - 20').optional().isArray().isLength({ max: 20 }),
]

export const createMessageValidation = [
    body('text', 'Сообщение должно быть в диапазоне от 1 до 100 символов').isLength({min: 1, max: 100})
]