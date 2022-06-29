const Wallpost = require('../model/Wallpost')


exports.createNewPost = async (req, res) => {
    try {
        console.log('req.body create post :', req.body)
        let post = new Wallpost({
            title: req.body.title,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            location: req.body.location,
            createdDate: req.body.createdDate,
            likes: req.body.likes,
            author: req.body.author
        });

        let createdPost = await post.save();
        res.status(200).json({
            message: "nouveau post enregistré",
            data: createdPost,
        })
    }catch (err){
        console.log('catch create new post', err);
        res.status(500).json({
            error: err
        })
    }
}
