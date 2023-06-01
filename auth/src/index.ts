import express from 'express';
import mongoose from 'mongoose'
import 'express-async-errors';
import cookieSession from 'cookie-session';

import router from './route';
import errorHandler from './middleware/errorHandler';
import { NotFound } from './errors';

const app = express()


app.set('trust proxy', 1);
app.use(cookieSession({
    signed: false,
    secure: true
}))

app.use(express.json())
app.use('/api/users', router)
app.all('*', () => {
    throw new NotFound()
})

app.use(errorHandler)

const start = async () => {
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

start()