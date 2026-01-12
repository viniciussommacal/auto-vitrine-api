import bcrypt from 'bcryptjs';

export default class UsuarioService {
  constructor(usuarioRepository) {
    this.usuarioRepository = usuarioRepository;
  }

  async listAll() {
    return await this.usuarioRepository.findAll();
  }

  async store(data) {
    const userExists = await this.usuarioRepository.findByEmail(data.email);
    if (userExists) {
      throw new Error('E-mail já cadastrado');
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    return await this.usuarioRepository.create({
      ...data,
      password: hashedPassword,
    });
  }

  async update(id, data) {
    const usuario = await this.usuarioRepository.findById(id);
    if (!usuario) {
      throw new Error('Usuário não encontrado');
    }

    if (data.email && data.email !== usuario.email) {
      const emailExists = await this.usuarioRepository.findByEmail(data.email);
      if (emailExists) {
        throw new Error('E-mail já está em uso por outro usuário');
      }
    }

    delete data.password;

    return await this.usuarioRepository.update(id, data);
  }

  async getById(id) {
    const usuario = await this.usuarioRepository.findById(id);
    if (!usuario) throw new Error('Usuário não encontrado');
    return usuario;
  }

  async destroy(id) {
    const deleted = await this.usuarioRepository.delete(id);
    if (!deleted) {
      throw new Error('Erro ao excluir: Usuário não encontrado');
    }

    return true;
  }
}
