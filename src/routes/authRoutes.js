import { Router } from 'express';
import { makeAuthController } from '../factories/authFactory.js';
import { validateSchema } from '../middlewares/validateSchema.js';
import { loginSchema } from '../schemas/authSchema.js';

const router = Router();
const authController = makeAuthController();

router.post('/login', validateSchema(loginSchema), (req, res) =>
  authController.login(req, res),
);

export default router;
