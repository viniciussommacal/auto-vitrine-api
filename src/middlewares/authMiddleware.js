import jwt from 'jsonwebtoken';
import { StatusCodes } from 'http-status-codes';

export default function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: 'Token não informado' });
  }

  const [_, token] = authHeader.split(' ');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    return next();
  } catch {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: 'Token inválido ou expirado' });
  }
}
