import { StatusCodes } from 'http-status-codes';

export default class VeiculoController {
  constructor(veiculoService) {
    this.veiculoService = veiculoService;
  }

  async index(req, res) {
    try {
      const { page = 1, limit = 10, ...filters } = req.query;

      const isAdmin = req.user && req.user.admin === true;

      const result = await this.veiculoService.listAll(
        filters,
        isAdmin,
        Number(page),
        Number(limit),
      );

      return res.status(StatusCodes.OK).json(result);
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: error.message,
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const veiculo = await this.veiculoService.getById(id);
      return res.status(StatusCodes.OK).json(veiculo);
    } catch (error) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: error.message,
      });
    }
  }

  async create(req, res) {
    try {
      await this.veiculoService.store(req.body);
      return res.status(StatusCodes.CREATED).send();
    } catch (error) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: error.message,
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const veiculoAtualizado = await this.veiculoService.update(id, req.body);
      return res.status(StatusCodes.OK).json(veiculoAtualizado);
    } catch (error) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: error.message,
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      await this.veiculoService.destroy(id);
      return res.status(StatusCodes.NO_CONTENT).send();
    } catch (error) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: error.message,
      });
    }
  }
}
