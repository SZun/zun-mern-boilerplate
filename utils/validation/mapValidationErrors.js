const mapValidationErrors = validation => {
  const errors = {};
  const { error } = validation;
  if (error) {
    error.details.map(err => {
      const errorVal = err.message.replace(/"/g, '');
      const key = errorVal.split(' ')[0];
      errors[key] = `${key} is invalid`;
    });
    return errors;
  }
};

export default mapValidationErrors;
