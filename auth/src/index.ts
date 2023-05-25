import express from 'express';
import router from './route';
import errorHandler from './middleware/errorHandler';
import { NotFound } from './errors';
import mongoose from 'mongoose'
require('express-async-errors')

const app = express()

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