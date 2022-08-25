const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type:String,
        required: true,
        unquie: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: false
    },
    fromGoogle: {
        type: Boolean,
        default: false,
    },
    fromFacebook: {
        type: Boolean,
        default: false
    },
    token: {
        type: String,
        required: false
    },
    friends: {
        type: Array,
        default: []
    }

})

const user = mongoose.model('user', userSchema)
module.exports = user