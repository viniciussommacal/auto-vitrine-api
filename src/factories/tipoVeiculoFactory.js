import TipoVeiculo from '../models/tipoVeiculo.js';
import TipoVeiculoRepository from '../repositories/tipoVeiculoRepository.js';
import TipoVeiculoService from '../services/tipoVeiculoService.js';
import TipoVeiculoController from '../controllers/tipoVeiculoController.js';

export function makeTipoVeiculoController() {
  const tipoVeiculoRepository = new TipoVeiculoRepository(TipoVeiculo);
  const tipoVeiculoService = new TipoVeiculoService(tipoVeiculoRepository);

  return new TipoVeiculoController(tipoVeiculoService);
}
