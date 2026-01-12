export default class TipoVeiculoService {
  constructor(tipoVeiculoRepository) {
    this.tipoVeiculoRepository = tipoVeiculoRepository;
  }

  async listAll() {
    return await this.tipoVeiculoRepository.findAll();
  }

  async getById(id) {
    const tipo = await this.tipoVeiculoRepository.findById(id);
    if (!tipo) {
      throw new Error('Tipo de veículo não encontrado');
    }

    return tipo;
  }

  async store(data) {
    return await this.tipoVeiculoRepository.create(data);
  }

  async update(id, data) {
    const tipo = await this.tipoVeiculoRepository.update(id, data);
    if (!tipo) {
      throw new Error(
        'Não foi possível atualizar: Tipo de veículo não encontrado',
      );
    }

    return tipo;
  }

  async destroy(id) {
    const deleted = await this.tipoVeiculoRepository.delete(id);
    if (!deleted) {
      throw new Error(
        'Não foi possível excluir: Tipo de veículo não encontrado',
      );
    }

    return true;
  }
}
