import request from 'supertest';
import { app } from '../app';

it('should return 400 with missing email and password', async () => {
  await request(app)
    .post('/api/users/signin')
    .send({
      password: 'password',
    })
    .expect(400);

  await request(app)
    .post('/api/users/signin')
    .send({
      email: 'johndoe@localhost.com',
    })
    .expect(400);
});

it('should return 400 for an unregistered user', async () => {
  return request(app)
    .post('/api/users/signin')
    .send({
      email: 'johndoe@localhost.com',
      password: 'password',
    })
    .expect(400);
});

