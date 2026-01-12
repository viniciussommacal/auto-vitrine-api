export default class veiculoRepository {
  constructor(veiculoModel) {
    this.veiculoModel = veiculoModel;
  }

  async paginate(where = {}, limit = 10, offset = 0) {
    return await this.veiculoModel.findAndCountAll({
      where,
      include: [{ association: 'tipo', attributes: ['id', 'nome'] }],
      limit: Number(limit),
      offset: Number(offset),
      order: [['id', 'DESC']],
      distinct: true,
    });
  }

  async findAll(where = {}) {
    return await this.veiculoModel.findAll({
      where,
      include: [
        {
          association: 'tipo',
          attributes: ['id', 'nome'],
        },
      ],
      attributes: {
        exclude: ['tipo_id'],
      },
    });
  }

  async findById(id) {
    return await this.veiculoModel.findByPk(id, {
      include: ['tipo'],
    });
  }

  async create(data) {
    return await this.veiculoModel.create(data);
  }

  async update(id, data) {
    const veiculo = await this.veiculoModel.findByPk(id);
    if (!veiculo) return null;

    return await veiculo.update(data);
  }

  async delete(id) {
    const veiculo = await this.veiculoModel.findByPk(id);
    if (!veiculo) return null;

    await veiculo.destroy();
    return true;
  }
}
