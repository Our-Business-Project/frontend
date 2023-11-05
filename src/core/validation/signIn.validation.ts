import Joi from 'joi';
const tlds = require('../../../node_modules/@sideway/address/lib/tlds.js');

import { passwordRegex, phoneRegex } from './constants/regex';

export const signInSchema = Joi.object({
  emailOrPhone: Joi.alternatives()
    .try(Joi.string().email({ tlds: { allow: tlds } }), Joi.string().pattern(phoneRegex))
    .required()
    .messages({
      'alternatives.match': 'Невірна пошта / телефон',
    }),
  password: Joi.string().min(8).max(255).pattern(passwordRegex).required().messages({
    'string.empty': `Обов'язкове поле`,
    'string.min': 'Мінімум 8 символів',
    'string.max': 'Максимум 255 символів',
    'string.pattern.base': `Повинен містити a-z A-Z 0-9 та спец. символи`,
  }),
});
