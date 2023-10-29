import Joi from 'joi';
const tlds = require('../../../node_modules/@sideway/address/lib/tlds.js');

export const signInSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: tlds } })
    .messages({
      'string.email': 'Невірна пошта',
      'string.empty': `Не може бути пустою`,
    })
    .required(),
  password: Joi.string()
    .min(8)
    .max(255)
    .pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,255}$/)
    .required()
    .messages({
      'string.empty': `Обов'язкове поле`,
      'string.min': 'Мінімум 8 символів',
      'string.max': 'Максимум 255 символів',
      'string.pattern.base': `Повинен містити a-z A-Z 0-9 та спец. символи`,
    }),
});
