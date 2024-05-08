const { Schema, model } = require('mongoose');

// const posts = [
//     {
//         title: "Discover Your Inner Genius To Better",
//         type: "Travel",
//         author: "EWRIN JONSON",
//         date: "MAR 22, 2021",
//         views: 62,
//         description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
//         image: "/assets/images/demo.jpeg",
//         reactions: 34,
//         comments: 12
//     },

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: new Date().toDateString()
    },
    views: {
        type: Number,
        default: 0
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    reactions: {
        type: Number,
        default: 0
    },
    comments: {
        type: Number,
        default: 0
    }
});

module.exports = model('Post', postSchema);
