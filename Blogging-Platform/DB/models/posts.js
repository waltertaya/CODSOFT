const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    username: {
        type: String,
        required: true
    },
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
