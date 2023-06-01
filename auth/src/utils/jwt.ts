import jwt from 'jsonwebtoken';
const generateJWT = (payload: any) => {
  return jwt.sign(payload, 'abcd', {
    expiresIn: '1d',
  });
};

const decodeJWT = (token: string) => {
  return jwt.verify(token, 'abcd');
};

export { generateJWT, decodeJWT };
