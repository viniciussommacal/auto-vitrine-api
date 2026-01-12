class UsuarioRepository {
  constructor(usuarioModel) {
    this.usuarioModel = usuarioModel;
  }

  async findByEmail(email) {
    return this.usuarioModel.findOne({
      where: { email },
    });
  }

  async findByEmailWithPassword(email) {
    return await this.usuarioModel.scope(null).findOne({
      where: { email },
    });
  }

  async findById(id) {
    return this.usuarioModel.findByPk(id, {
      attributes: {
        exclude: ['password'],
      },
    });
  }

  async create(data) {
    return this.usuarioModel.create(data);
  }

  async update(id, data) {
    const usuario = await this.usuarioModel.findByPk(id);

    if (!usuario) {
      return null;
    }

    return await usuario.update(data);
  }

  async delete(id) {
    const usuario = await this.usuarioModel.findByPk(id);
    if (!usuario) {
      return null;
    }

    return await usuario.destroy();
  }

  async findAll() {
    return this.usuarioModel.findAll();
  }
}

export default UsuarioRepository;
