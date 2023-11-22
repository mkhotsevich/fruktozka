import 'dotenv/config'
import mongoose from 'mongoose'
import { User } from './models/User';
import { startServer } from './server';

const start = async () => {
    try {
        startServer()
        await mongoose.connect('mongodb+srv://mkhotsevich:QtKVmTX0qZMnKrjF@cluster0.r4vmsp5.mongodb.net/?retryWrites=true&w=majority');
        // User.create({ twitchId: '1', username: '123' })
        // console.log(a)
    } catch (e) {
        // console.log(e)
    }
}

start()