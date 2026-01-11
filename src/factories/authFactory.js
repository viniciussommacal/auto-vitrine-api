import Usuario from '../models/usuario.js';
import UsuarioRepository from '../repositories/usuarioRepository.js';
import AuthService from '../services/authService.js';
import AuthController from '../controllers/authController.js';

export function makeAuthController() {
  const usuarioRepository = new UsuarioRepository(Usuario);
  const authService = new AuthService(usuarioRepository);

  return new AuthController(authService);
}
