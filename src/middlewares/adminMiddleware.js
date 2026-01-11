import { StatusCodes } from 'http-status-codes';

export default function adminMiddleware(req, res, next) {
  if (req.user && req.user.role === 'admin') {
    return next();
  }

  return res.status(StatusCodes.FORBIDDEN).json({
    message: 'Acesso negado: Requer privilégios de administrador'
  });
}
