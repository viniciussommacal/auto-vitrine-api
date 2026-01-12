import { z } from 'zod';

export const createUsuarioSchema = z.object({
  nome: z
    .string({
      required_error: 'Nome é obrigatório',
    })
    .min(3, 'Nome deve ter no mínimo 3 caracteres')
    .max(100, 'Nome deve ter no máximo 100 caracteres'),

  email: z
    .string({
      required_error: 'Email é obrigatório',
    })
    .email('Email inválido'),

  password: z
    .string({
      required_error: 'Senha é obrigatória',
    })
    .min(6, 'Senha deve ter no mínimo 6 caracteres'),

  admin: z
    .boolean({
      invalid_type_error: 'Admin deve ser um valor booleano',
    })
    .optional()
    .default(false),
});

export const updateUsuarioSchema = createUsuarioSchema
  .partial()
  .refine(data => Object.keys(data).length > 0, {
    message: 'É necessário fornecer ao menos um campo para atualização',
  });
