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

it('should return 400 for an invalid password', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      name: 'John Doe',
      email: 'johndoe@localhost.com',
      password: 'password',
    })
    .expect(201);

  await request(app)
    .post('/api/users/signin')
    .send({
      email: 'johndoe@localhost.com',
      password: 'pass',
    })
    .expect(400);
});

it('should return 200 for a valid user', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      name: 'John Doe',
      email: 'johndoe@localhost.com',
      password: 'password',
    })
    .expect(201);

  const res = await request(app)
    .post('/api/users/signin')
    .send({
      email: 'johndoe@localhost.com',
      password: 'password',
    })
    .expect(200);

    expect(res.get('Set-Cookie')).toBeDefined();
})
