class UsuarioRepository {
  constructor(usuarioModel) {
    this.usuarioModel = usuarioModel;
  }

  async findByEmail(email) {
    return this.usuarioModel.findOne({
      where: {
        email,
      },
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

  async delete(id) {
    return this.usuarioModel.destroy({
      where: {
        id,
      },
    });
  }

  async findAll() {
    return this.usuarioModel.findAll({
      attributes: {
        exclude: ['password'],
      },
    });
  }
}

export default UsuarioRepository;
