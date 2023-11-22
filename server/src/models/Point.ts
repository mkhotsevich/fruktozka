import { Schema, model } from "mongoose";

const schema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' }
})

export const Point = model('Point', schema)