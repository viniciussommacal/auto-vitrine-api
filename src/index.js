import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from './routes/authRoutes.js';
import { StatusCodes } from 'http-status-codes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);

app.get('/health', (req, res) => {
  return res.status(StatusCodes.OK).json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`App executando na porta ${PORT}`);
});
