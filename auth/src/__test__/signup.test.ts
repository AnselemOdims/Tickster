import request  from 'supertest';
import { app } from '../app';

it('should return 201 on successful signup', () => {
    return request(app)
            .post('/api/users/signup')
            .send({
                name: 'John Doe',
                email: 'johndoe@localhost.com',
                password: 'password'
            })
            .expect(201)
})