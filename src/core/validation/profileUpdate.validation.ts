import Joi from 'joi';
const tlds = require('../../../node_modules/@sideway/address/lib/tlds.js');

import { phoneRegex } from './constants/regex';

export const profileUpdateSchema = Joi.object({
  email: Joi.string().email({ tlds: { allow: tlds } }),
  firstName: Joi.string().min(2).max(255).messages({
    'string.empty': "Обов'язкове поле",
    'string.min': 'Мінімум 2 символа',
    'string.max': 'Максимум 255 символів',
  }),
  lastName: Joi.string().min(2).max(255).messages({
    'string.empty': "Обов'язкове поле",
    'string.min': 'Мінімум 2 символа',
    'string.max': 'Максимум 255 символів',
  }),
  phone: Joi.string().pattern(phoneRegex).messages({
    'string.pattern.base': 'Невірний телефон',
  }),
});
