import Usuario from '../models/usuario.js';
import UsuarioRepository from '../repositories/usuarioRepository.js';
import UsuarioService from '../services/usuarioService.js';
import UsuarioController from '../controllers/usuarioController.js';

export function makeUsuarioController() {
  const repository = new UsuarioRepository(Usuario);
  const service = new UsuarioService(repository);

  return new UsuarioController(service);
}