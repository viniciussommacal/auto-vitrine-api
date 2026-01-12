import { StatusCodes } from 'http-status-codes';

export default function validateSchema(schema) {
  return (req, res, next) => {
    try {
      schema.parse(req.body);
      return next();
    } catch (error) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: 'Erro de validação',
        errors: error.errors,
      });
    }
  };
}
