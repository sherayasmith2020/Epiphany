const Post = require('../models/posts');

exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [{title: 'First Post', content: 'This is the first post!'}]
    });
};

exports.createPost = (req, res, next) => {
    const title = req.body.title;
    //const content = req.body.content;
    const newPost = new Post(title);
    newPost
    .save()
    .then(result => {
        //console.log(result);
        console.log("Success here too!");
    })
    .catch(err => {
        console.log("uh-oh!");
        console.log(err);
    });
    res.status(201).json({
        message: 'Post created successfully!',
        post: {
            id: new Date().toISOString(), 
            title: title //, 
            //content: content 
        }
    });

};