import Joi from 'joi';
import emailRegex from '../utils/Regex/email';
import passwordRegex from '../utils/Regex/password';

const validation = (user, login = false) => {
  let schema;
  login
    ? (schema = {
        email: Joi.string()
          .regex(emailRegex)
          .required(),
        password: Joi.string()
          .min(8)
          .max(26)
          .regex(passwordRegex)
          .required()
      })
    : (schema = {
        name: Joi.string()
          .min(2)
          .max(255)
          .required(),
        email: Joi.string()
          .regex(emailRegex)
          .required(),
        password: Joi.string()
          .min(8)
          .max(26)
          .regex(passwordRegex)
          .required(),
        confirmPassword: Joi.string()
          .min(8)
          .max(26)
          .regex(passwordRegex)
          .valid(Joi.ref('password'))
          .required()
      });
  return Joi.validate(user, schema, { abortEarly: false });
};

export default validation;
