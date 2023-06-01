import { Request, Response } from 'express';
import User from '../models/user';
import { BadRequest } from '../errors';
import Password from '../utils/password';
import { generateJWT } from '../utils/jwt';

const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const existingUser = await User.findOne({ email: email });
  if (!existingUser) {
    throw new BadRequest('Invalid credentials');
  }
  const passwordMatch = await Password.comparePwd(
    existingUser.password,
    password
  );
  if (!passwordMatch) {
    throw new BadRequest('Invalid credentials');
  }
  const token = generateJWT({ id: existingUser.id, email: existingUser.email });
  req.session = { jwt: token };
  res.status(200).send({
    message: 'success',
    data: {
      name: existingUser.name,
      email: existingUser.email,
      id: existingUser.id,
    },
  });
};

export default signIn;
