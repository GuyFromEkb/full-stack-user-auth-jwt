import { ControllerMiddleWares } from '@common/BaseController/types';
import { body } from 'express-validator';

export const userBodyValidation: ControllerMiddleWares = [
  body('email', 'должен быть Email').isEmail(),
  body('password')
    .isString()
    .isLength({ min: 6, max: 12 })
    .withMessage('Минимальная длинна 6, максимальная 12'),
];
