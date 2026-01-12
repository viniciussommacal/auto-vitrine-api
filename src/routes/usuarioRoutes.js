import { Router } from 'express';
import { makeUsuarioController } from '../factories/usuarioFactory.js';
import { createUsuarioSchema, updateUsuarioSchema } from '../schemas/usuarioSchema.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import adminMiddleware from '../middlewares/adminMiddleware.js';
import validateSchemaMiddleware from '../middlewares/validateSchemaMiddleware.js';

const router = Router();
const controller = makeUsuarioController();

router.get('/', authMiddleware, adminMiddleware, (req, res) =>
  controller.index(req, res),
);

router.get('/:id', authMiddleware, (req, res) => controller.show(req, res));

router.post('/', authMiddleware, adminMiddleware, validateSchemaMiddleware(createUsuarioSchema), (req, res) =>
  controller.create(req, res),
);

router.put('/:id', authMiddleware, adminMiddleware, validateSchemaMiddleware(updateUsuarioSchema), (req, res) =>
  controller.update(req, res),
);

router.delete('/:id', authMiddleware, adminMiddleware, (req, res) =>
  controller.delete(req, res),
);

export default router;
