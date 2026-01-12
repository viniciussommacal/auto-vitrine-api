export default class VeiculoService {
  constructor(veiculoRepository) {
    this.veiculoRepository = veiculoRepository;
  }

  async listAll(filters = {}, isAdmin = false, page = 1, limit = 10) {
    const queryFilters = { ...filters };

    if (!isAdmin) {
      queryFilters.visivel = true;
    }

    const offset = (page - 1) * limit;

    const { count, rows } = await this.veiculoRepository.paginate(
      queryFilters,
      limit,
      offset,
    );

    return {
      totalItems: count,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      data: rows,
    };
  }

  async getById(id) {
    const veiculo = await this.veiculoRepository.findById(id);
    if (!veiculo) {
      throw new Error('Veículo não encontrado');
    }
    return veiculo;
  }

  async store(data) {
    return await this.veiculoRepository.create(data);
  }

  async update(id, data) {
    const veiculo = await this.veiculoRepository.update(id, data);
    if (!veiculo) {
      throw new Error('Não foi possível atualizar: Veículo não encontrado');
    }
    return veiculo;
  }

  async destroy(id) {
    const deleted = await this.veiculoRepository.delete(id);
    if (!deleted) {
      throw new Error('Não foi possível excluir: Veículo não encontrado');
    }
    return true;
  }
}
