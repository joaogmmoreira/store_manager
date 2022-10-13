const registryProductValidation = (data) => {
  const nameMinLength = 5;

  if (!data.name) {
    return { type: 'NAME_IS_REQUIRED', message: '"name" is required' };
  }

  if (data.name.length < nameMinLength) {
    return { type: 'NAME_LENGTH', message: '"name" length must be at least 5 characters long' };
  }
  return { type: null, message: '' };
};

module.exports = {
  registryProductValidation,
};