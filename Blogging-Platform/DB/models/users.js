const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    joined: {
        type: String,
        default: new Date().toDateString()
    },
    image: {
        type: String,
        required: false
    },
    location: {
        type: String,
        required: false
    },
    followers: {
        type: Number,
        default: 0
    },
    following: {
        type: Number,
        default: 0
    },
    posts: {
        type: Number,
        default: 0
    },
    bio: {
        type: String,
        required: false
    },
    areasOfInterest: {
        type: [String],
        required: false
    },
    socials: {
        type: [
            {
                name: String,
                link: String
            }
        ],
        required: false
    },
    role: {
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

const User = model('User', userSchema);

module.exports = User;
