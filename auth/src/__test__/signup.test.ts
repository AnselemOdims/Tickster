import request from 'supertest';
import { app } from '../app';

it('should return 201 on successful signup', () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      name: 'John Doe',
      email: 'johndoe@localhost.com',
      password: 'password',
    })
    .expect(201);
});

it('should return 400 with an invalid name', () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      name: 'John',
      email: 'johndoe@localhost.com',
      password: 'password',
    })
    .expect(400);
});

it('should return 400 with an invalid email', () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      name: 'John Doe',
      email: 'johndoe@localhost',
      password: 'password',
    })
    .expect(400);
});

it('should return 400 with an invalid password', () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      name: 'John Doe',
      email: 'johndoe@localhost.com',
      password: 'pass',
    })
    .expect(400);
});

it('should return 400 with missing name, email and password', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'johndoe@localhost.com',
      password: 'password',
    })
    .expect(400);

  await request(app)
    .post('/api/users/signup')
    .send({
      name: 'John Doe',
      password: 'password',
    })
    .expect(400);

  await request(app)
    .post('/api/users/signup')
    .send({
      name: 'John Doe',
      email: 'johndoe@localhost.com',
    })
    .expect(400);
});

it('should disallow duplicate emails', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      name: 'John Doe',
      email: 'johndoe@localhost.com',
      password: 'password',
    })
    .expect(201);

  await request(app)
    .post('/api/users/signup')
    .send({
      name: 'John Doe',
      email: 'johndoe@localhost.com',
      password: 'password',
    })
    .expect(400);
});

it('should set a cookie after successful signup', async () => {
  const res = await request(app).post('/api/users/signup').send({
    name: 'John Doe',
    email: 'johndoe@localhost.com',
    password: 'password',
  });

  expect(res.get('Set-Cookie')).toBeDefined();
});
