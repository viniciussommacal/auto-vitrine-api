import { Router } from 'express';
import { makeVeiculoController } from '../factories/veiculoFactory.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import adminMiddleware from '../middlewares/adminMiddleware.js';

const router = Router();
const veiculoController = makeVeiculoController();

router.get('/', (req, res) => veiculoController.index(req, res));

router.get('/:id', (req, res) => veiculoController.show(req, res));

router.post('/', authMiddleware, adminMiddleware, (req, res) =>
  veiculoController.create(req, res),
);

router.put('/:id', authMiddleware, adminMiddleware, (req, res) =>
  veiculoController.update(req, res),
);

router.delete('/:id', authMiddleware, adminMiddleware, (req, res) =>
  veiculoController.delete(req, res),
);

export default router;
