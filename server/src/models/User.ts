import { Schema, model } from "mongoose";

const schema = new Schema({
    twitchId: String,
    username: String
})

export const User = model('User', schema)