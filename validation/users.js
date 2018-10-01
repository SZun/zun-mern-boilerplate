import Joi from 'joi';

const validateRegistration = user => {
  const schema = {
    name: Joi.string()
      .min(2)
      .max(255)
      .required(),
    email: Joi.string()
      .regex(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      )
      .required(),
    password: Joi.string()
      .min(8)
      .max(26)
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,26}$/)
      .required(),
    confirmPassword: Joi.string()
      .required()
      .valid(Joi.ref('password'))
      .min(8)
      .max(26)
  };

  return Joi.validate(user, schema, { abortEarly: false });
};

const validateLogin = user => {
  const schema = {
    email: Joi.string()
      .regex(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      )
      .required(),
    password: Joi.string()
      .min(8)
      .max(26)
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,26}$/)
      .required()
  };

  return Joi.validate(user, schema, { abortEarly: false });
};

export { validateRegistration, validateLogin };
