import MessageModel from '../models/message.js'

export const getAllMessages = async (res) => {
    try {
        const messages = await MessageModel.find().populate('author').exec()
        res.json(messages)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Не удалось получить сообщения'
        })
    }
}

export const createMessage = async (req, res) => {
    try {
        const doc = new PostModel({
            text: req.body.title,
            author: req.userID,
            likesCount: req.body.likesCount,
        })

        const message = await doc.save()
        res.json(message)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Ошибка при создании сообщения'
        })
    }
}

export const updateMessage = async (req, res) => {
    try {
        const itemID = req.params.id
        await MessageModel.updateOne({
            _id: itemID,
        }, {
            text: req.body.title,
        })
        res.json({
            success: true
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Ошибка при обновлении сообщения'
        })
    }
}

export const deleteMessage = async (req, res) => {
    try {
        const itemID = req.params.id
        MessageModel.findByIdAndDelete({
            _id: itemID,
        }, (error, doc) => {
            if (error) {
                console.log(error)
                return res.status(500).json({
                    message: 'Не удалось получить сообщение'
                })
            }
            if (!doc) {
                return res.status(404).json({
                    message: 'Сообщение не найдено'
                })
            }
            res.json({
                success: true
            })
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Не удалось удалить'
        })
    }
}
