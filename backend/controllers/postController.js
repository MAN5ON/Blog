import PostModel from '../models/post.js'

export const getAllPosts = async (req, res) => {
    try {
        const posts = await PostModel.find().populate('author').exec()
        res.json(posts)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Не удалось получить статьи'
        })
    }
}

export const getOnePost = (req, res) => {
    try {
        const postID = req.params.id
        PostModel.findOneAndUpdate({
            _id: postID,
        }, {
            $inc: { viewsCount: 1 },
        }, {
            returnDocument: 'after',
        },
            (error, doc) => {
                if (error) {
                    console.log(error)
                    return res.status(500).json({
                        message: 'Не удалось получить статью'
                    })
                }
                if (!doc) {
                    return res.status(404).json({
                        message: 'Статья не найдена'
                    })
                }
                res.json(doc)
            })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Не удалось получить статью'
        })

    }
}

export const newPost = async (req, res) => {
    try {
        const doc = new PostModel({
            title: req.body.title,
            introText: req.body.introText,
            introIMG: req.body.introIMG,
            postArr: req.body.postArr,
            tags: req.body.tags,
            author: req.userID,
            viewsCount: req.body.viewsCount,
            likesCount: req.body.likesCount,
            comments: req.body.comments
        })

        const post = await doc.save()
        res.json(post)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Ошибка при создании статьи'
        })
    }
}

export const updatePost = async (req, res) => {
    try {
        const itemID = req.params.id
        await PostModel.updateOne({
            _id: itemID
        }, {
            title: req.body.title,
            intro: req.body.intro,
            introIMG: req.body.introIMG,
            postArr: req.body.text,
            tags: req.body.tags,
            // Комментарий выглядит как массив объектов с default = []
            // Значит при работе с комментариями нам не нужно создавать/удалять массив,
            // а изменять массив комментариев внутри модели поста...
            // т.е. в теории на все виды задач с комментариями(создание, удаление, изменение) хватит одной функции ?
            comments: req.body.comments
        })
        res.json({
            success: true
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Ошибка при обновлении информации'
        })
    }
}

export const deletePost = async (req, res) => {
    try {
        const itemID = req.params.id
        PostModel.findByIdAndDelete({
            _id: itemID,
        }, (error, doc) => {
            if (error) {
                console.log(error)
                return res.status(500).json({
                    message: 'Не удалось получить статью'
                })
            }
            if (!doc) {
                return res.status(404).json({
                    message: 'Статья не найдена'
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
