const { Schema, model } = require('mongoose');

const followingSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    following: {
        type: [String],
        required: false
    }
});

const Following = model('Following', followingSchema);

module.exports = Following;
