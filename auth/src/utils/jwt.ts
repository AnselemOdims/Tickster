import jwt from 'jsonwebtoken';
const generateJWT = (payload: any) => {
  return jwt.sign(payload, process.env.JWT_KEY!);
};

const decodeJWT = (token: string) => {
  return jwt.verify(token, process.env.JWT_KEY!);
};

export { generateJWT, decodeJWT };
