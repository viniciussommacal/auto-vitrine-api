export default class tipoVeiculoRepository {
  constructor(tipoVeiculoModel) {
    this.tipoVeiculoModel = tipoVeiculoModel;
  }

  async findAll() {
    return await this.tipoVeiculoModel.findAll({
      order: [['nome', 'ASC']],
    });
  }

  async findById(id) {
    return await this.tipoVeiculoModel.findByPk(id);
  }

  async findByNome(nome) {
    return await this.tipoVeiculoModel.findOne({
      where: { nome },
    });
  }

  async create(data) {
    return await this.tipoVeiculoModel.create(data);
  }

  async update(id, data) {
    const tipo = await this.tipoVeiculoModel.findByPk(id);
    if (!tipo) return null;

    return await tipo.update(data);
  }

  async delete(id) {
    const tipo = await this.tipoVeiculoModel.findByPk(id);
    if (!tipo) return null;

    await tipo.destroy();
    return true;
  }
}
