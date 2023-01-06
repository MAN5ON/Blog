import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt"

import UserModel from "../models/user.js"


export const signup = async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json(errors.array())
        }

        const password = req.body.password
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        const doc = new UserModel({
            email: req.body.email,
            login: req.body.login,
            name: req.body.name,
            surname: req.body.surname,
            passwordHash: hash,
            avatarURL: req.body.avatarURL,
            userInfo: ''
        })

        const user = await doc.save();

        const token = jwt.sign({
            _id: user._id,
        }, 'flowers',
            {
                expiresIn: '30d',
            }
        )

        const { passwordHash, ...userData } = user._doc
        res.json({ ...userData, token })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Ошибка регистрации'
        })
    }
}

export const login = async (req, res) => {
    try {
        const user = await UserModel.findOne({ email: req.body.email });

        if (!user) {
            return res.status(404).json({
                message: 'Пользователь не найден'
            })
        }

        const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash)
        if (!isValidPass) {
            return res.status(400).json({
                message: 'Неверный логин или пароль'
            })
        }

        const token = jwt.sign({
            _id: user._id,
        }, 'flowers',
            {
                expiresIn: '30d',
            }
        )

        const { passwordHash, ...userData } = user._doc
        res.json({ ...userData, token })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Ошибка авторизации'
        })
    }

}

export const profile = async (req, res) => {
    try {
        const user = await UserModel.findById(req.userID)
        if (!user) {
            return res.status(404).json({
                message: 'Пользователь не найден'
            })
        }
        const { passwordHash, ...userData } = user._doc
        res.json({ ...userData })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Ошибка при поиске пользователя'
        })
    }
}
