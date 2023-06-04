import request from 'supertest';
import { app } from '../app';
import { authUser } from '../test/authUser';

it('should return details of currently logged in user', async () => {
  const cookie = await authUser();

  const res = await request(app)
    .get('/api/users/currentUser')
    .set('Cookie', cookie)
    .send()
    .expect(200);

  expect(res.body.currentUser.email).toEqual('johndoe@localhost.com');
});
