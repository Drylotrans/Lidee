const { Schema, model } = require("mongoose");

let guildSchema = new Schema({
    _id: {
        type: String
    },
    prefix: {
        type: String,
        default: "m:"
    },
    language: {
        type: String,
        default: "en"
    },
    premium: {
        type: Boolean,
        default: false
    }
});

let userSchema = new Schema({
    _id: {
        type: String
    },
    flags: {
        type: Number,
        default: 0
    }
});

exports.guilds = model("Guild", guildSchema);
exports.users = model("User", userSchema);