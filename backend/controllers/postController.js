import PostModel from '../models/post.js'


export const createPost = async (req, res) => {
    try {
        const doc = new PostModel({
            title: req.body.title,
            text: req.body.text,
            imageURL: req.body.imageURL,
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