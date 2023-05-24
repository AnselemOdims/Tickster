import express from 'express';
import router from './route'

const app = express()

app.use(express.json())

app.use('/api/users', router)

app.listen(5000, () => {
    console.log('Listening on port 5000!!!')
})
