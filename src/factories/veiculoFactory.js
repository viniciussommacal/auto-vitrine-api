import Veiculo from '../models/veiculo.js';
import VeiculoRepository from '../repositories/veiculoRepository.js';
import VeiculoService from '../services/veiculoService.js';
import VeiculoController from '../controllers/veiculoController.js';

export function makeVeiculoController() {
  const veiculoRepository = new VeiculoRepository(Veiculo);
  const veiculoService = new VeiculoService(veiculoRepository);

  return new VeiculoController(veiculoService);
}
