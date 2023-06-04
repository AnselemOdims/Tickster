import request from 'supertest';
import { app } from '../app';

it('should return details of currently logged in user', async () => {
  const signUpRes = await request(app)
    .post('/api/users/signup')
    .send({
      name: 'John Doe',
      email: 'johndoe@localhost.com',
      password: 'password',
    })
    .expect(201);
  const cookie = signUpRes.get('Set-Cookie');

  const res = await request(app)
    .get('/api/users/currentUser')
    .set('Cookie', cookie)
    .send()
    .expect(200);

  expect(res.body.currentUser.email).toEqual('johndoe@localhost.com');
});
