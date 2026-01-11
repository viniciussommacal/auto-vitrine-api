import { StatusCodes } from 'http-status-codes';

class AuthController {
  constructor(authService) {
    this.authService = authService;
  }

  async login(req, res) {
    try {
      const token = await this.authService.login(req.body);
      return res.status(StatusCodes.OK).json({ token });
    } catch (error) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        message: error.message || 'Erro ao autenticar',
      });
    }
  }
}

export default AuthController;
