
const getModSchema = async () => {
  return {
    type: 'object',
    properties:
    {
      'id': {
        'type': 'string',
        'required': true
      },
      'band': {
        'type': 'string',
        'required': true
      },
      'year': {
        'type': 'string',
        'required': true
      },
      'image_uris': {
        'type': 'string',
        'required': true
      },
      'rockbanddescription': {
        'type': 'string',
        'required': true
      }
    }
  };
};

const getIdSchema = async () => {
  return {
    type: 'object',
    properties:
    {
      'id': {
        'type': 'string',
        'required': true
      }
    }
  };
};

module.exports = { getModSchema, getIdSchema };