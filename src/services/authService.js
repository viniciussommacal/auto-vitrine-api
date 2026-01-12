import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { id } from 'zod/locales';

class AuthService {
  constructor(usuarioRepository) {
    this.usuarioRepository = usuarioRepository;
  }

  async login({ email, password }) {
    const usuario = await this.usuarioRepository.findByEmail(email);

    if (!usuario) {
      throw new Error('E-mail ou senha inválidos');
    }

    const senhaValida = await bcrypt.compare(password, usuario.password);

    if (!senhaValida) {
      throw new Error('E-mail ou senha inválidos');
    }

    return jwt.sign(
      {
        id: usuario.id,
        admin: usuario.admin,
        email: usuario.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '1d',
      },
    );
  }
}

export default AuthService;
