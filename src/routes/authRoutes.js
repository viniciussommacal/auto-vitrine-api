import { Router } from 'express';
import { makeAuthController } from '../factories/authFactory.js';
import { loginSchema } from '../schemas/authSchema.js';
import validateSchemaMiddleware from '../middlewares/validateSchemaMiddleware.js';

const router = Router();
const authController = makeAuthController();

router.post('/login', validateSchemaMiddleware(loginSchema), (req, res) =>
  authController.login(req, res),
);

export default router;
