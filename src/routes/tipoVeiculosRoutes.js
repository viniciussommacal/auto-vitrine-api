import { Router } from 'express';
import { makeTipoVeiculoController } from '../factories/tipoVeiculoFactory.js';
import { tipoVeiculoSchema } from '../schemas/tipoVeiculoSchema.js';
import validateSchemaMiddleware from '../middlewares/validateSchemaMiddleware.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import adminMiddleware from '../middlewares/adminMiddleware.js';

const router = Router();
const tipoVeiculoController = makeTipoVeiculoController();

router.get('/', (req, res) => tipoVeiculoController.index(req, res));

router.get('/:id', (req, res) => tipoVeiculoController.show(req, res));

router.post(
  '/',
  authMiddleware,
  adminMiddleware,
  validateSchemaMiddleware(tipoVeiculoSchema),
  (req, res) => tipoVeiculoController.create(req, res),
);

router.put(
  '/:id',
  authMiddleware,
  adminMiddleware,
  validateSchemaMiddleware(tipoVeiculoSchema),
  (req, res) => tipoVeiculoController.update(req, res),
);

router.delete('/:id', authMiddleware, adminMiddleware, (req, res) =>
  tipoVeiculoController.delete(req, res),
);

export default router;
