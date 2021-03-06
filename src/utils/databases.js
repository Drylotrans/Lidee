const { Schema, model } = require('mongoose');

const guildSchema = new Schema({
    _id: {
        type: String
    },
    prefix: {
        type: String,
        default: 'l:'
    },
    language: {
        type: String,
        default: 'en'
    },
    premium: {
        type: Boolean,
        default: false
    },
    logs: {
        messages: {
            type: String,
            default: ''
        },
        voice: {
            type: String,
            default: ''
        },
        all: {
            type: String,
            default: ''
        }
    },
    multimedia: {
        type: String,
        default: ''
    },
    autorole: {
        type: Array,
        default: ''
    }
});

const userSchema = new Schema({
    _id: {
        type: String
    },
    flags: {
        type: Number,
        default: 0
    }
});

exports.guilds = model('Guild', guildSchema);
exports.users = model('User', userSchema);