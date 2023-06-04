import express from 'express';
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

export { app }