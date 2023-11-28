import Joi from 'joi';
const tlds = require('../../../node_modules/@sideway/address/lib/tlds.js');

import { phoneRegex } from './constants/regex';

export const profileUpdateSchema = Joi.object({
  email: Joi.string().email({ tlds: { allow: tlds } }),
  firstName: Joi.string()
    .min(2)
    .max(255)
    .pattern(/^[a-zA-Zа-яА-Я\-]+$/)
    .messages({
      'string.empty': "Обов'язкове поле",
      'string.min': 'Мінімум 2 символа',
      'string.max': 'Максимум 255 символів',
      'string.pattern.base': 'Повинно містити тільки літери',
    }),
  lastName: Joi.string()
    .min(2)
    .max(255)
    .pattern(/^[a-zA-Zа-яА-Я\-]+$/)
    .messages({
      'string.empty': "Обов'язкове поле",
      'string.min': 'Мінімум 2 символа',
      'string.max': 'Максимум 255 символів',
      'string.pattern.base': 'Повинно містити тільки літери',
    }),
  phone: Joi.string().pattern(phoneRegex).messages({
    'string.pattern.base': 'Невірний телефон',
  }),
  taxation: Joi.string().valid('NaturalPerson', 'Yurosoba').required(),
});
