import { StatusCodes } from 'http-status-codes';

export default class UsuarioController {
  constructor(usuarioService) {
    this.usuarioService = usuarioService;
  }

  // Listagem completa sem paginação
  async index(req, res) {
    try {
      const usuarios = await this.usuarioService.listAll();
      return res.status(StatusCodes.OK).json(usuarios);
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ 
        message: error.message 
      });
    }
  }

  async create(req, res) {
    try {
      await this.usuarioService.store(req.body);
      return res.status(StatusCodes.CREATED).send();
    } catch (error) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const usuario = await this.usuarioService.getById(id);
      return res.status(StatusCodes.OK).json(usuario);
    } catch (error) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      await this.usuarioService.update(id, req.body);
      return res.status(StatusCodes.OK).send();
    } catch (error) {
      return res.status(StatusCodes.BAD_REQUEST).json({ 
        message: error.message 
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      await this.usuarioService.destroy(id);
      return res.status(StatusCodes.NO_CONTENT).send();
    } catch (error) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
    }
  }
}