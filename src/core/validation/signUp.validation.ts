import Joi from 'joi';
const tlds = require('../../../node_modules/@sideway/address/lib/tlds.js');

import { phoneRegex, passwordRegex } from './constants/regex';

export const signUpSchema = Joi.object({
  firstName: Joi.string()
    .min(2)
    .max(255)
    .messages({
      'string.empty': "Обов'язкове поле",
      'string.min': 'Мінімум 2 символа',
      'string.max': 'Максимум 255 символів',
    })
    .required(),
  lastName: Joi.string()
    .min(2)
    .max(255)
    .messages({
      'string.empty': "Обов'язкове поле",
      'string.min': 'Мінімум 2 символа',
      'string.max': 'Максимум 255 символів',
    })
    .required(),
  email: Joi.string()
    .email({ tlds: { allow: tlds } })
    .messages({
      'string.email': 'Невірна пошта',
      'string.empty': "Обов'язкове поле",
    })
    .required(),
  phone: Joi.string()
    .pattern(phoneRegex)
    .messages({
      'string.email': 'Невірний телефон',
      'string.empty': "Обов'язкове поле",
      'string.pattern.base': 'Повинен бути у форматі +380 (99) 999-99-99',
    })
    .required(),
  password: Joi.string().min(8).max(255).pattern(passwordRegex).required().messages({
    'string.empty': "Обов'язкове поле",
    'string.min': 'Мінімум 8 символів',
    'string.max': 'Максимум 255 символів',
    'string.pattern.base': 'Повинен містити a-z A-Z 0-9 та спец. символи',
  }),
  repeatPassword: Joi.string().valid(Joi.ref('password')).required().messages({
    'string.empty': "Обов'язкове поле",
    'any.only': 'Паролі не співпадають',
  }),
});
