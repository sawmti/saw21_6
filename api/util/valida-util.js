const { JSONValidation } = require('json-validation');

const validaRequestSchema = async (body, schema) => {
  const promise = new Promise((resolve, reject) => {
    console.info('utilModule.validateEntrada()');
    const jv = new JSONValidation();
    const resultBodyVal = jv.validate(body, schema);
    if (!resultBodyVal.ok) {
      console.info(`utilModule.validateEntrada(), resultBodyVal:${resultBodyVal.errors.join(', ')} at path ${resultBodyVal.path}`);
      reject(new Error('Validacion Cuenta Erronea', resultBodyVal));
    }
    resolve(true);
  });
  return promise;
};

module.exports = { validaRequestSchema };