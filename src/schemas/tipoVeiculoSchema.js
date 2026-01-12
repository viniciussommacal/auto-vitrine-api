import { z } from 'zod';

export const tipoVeiculoSchema = z.object({
  nome: z
    .string({
      required_error: 'O nome do tipo é obrigatório',
      invalid_type_error: 'O nome deve ser uma string',
    })
    .trim()
    .min(2, 'O nome deve ter no mínimo 2 caracteres')
    .max(50, 'O nome deve ter no máximo 50 caracteres'),
});
