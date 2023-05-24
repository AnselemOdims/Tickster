import express from 'express';
import router from './route';
import errorHandler from './middleware/errorHandler';
import { NotFound } from './errors';
require('express-async-errors')

const app = express()

app.use(express.json())

app.use('/api/users', router)
app.all('*', () => {
    throw new NotFound()
})

app.use(errorHandler)

app.listen(5000, () => {
    console.log('Listening on port 5000!!!')
})
