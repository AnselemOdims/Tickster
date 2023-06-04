import mongoose from 'mongoose';
import { app } from './app'

const start = async () => {
    if(!process.env.JWT_KEY) {
        throw new Error('JWT_KEY not defined')
    }
    try {
        await mongoose.connect('mongodb://tickster-auth-db-srv:27017/auth')
        console.log('Connected to mongodb')
        app.listen(5000, () => {
            console.log('Listening on port 5000!!!')
        })
    } catch (err) {
        console.error(err)
    }
}

start();