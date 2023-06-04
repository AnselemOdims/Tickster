import { app } from '../app';
import request from 'supertest';

const authUser = async () => {
    const name = 'John Doe'
    const email = 'johndoe@localhost.com';
    const password = 'password';

    const res = await request(app)
                    .post('/api/users/signup')
                    .send({ name, email, password })
                    .expect(201);
    const cookie = res.get('Set-Cookie');
    return cookie
}

export { authUser }