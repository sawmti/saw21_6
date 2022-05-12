const { bandasSelectAll, bandasSelect, bandasRemove, bandasUpdate, bandasInsert } = require("../db/bandas-crud-controller");
const { getIdSchema, getModSchema } = require("../db/bandas-schema");
const { validaRequestSchema } = require("../util/valida-util");

const bandasObtiene = async (req, res) => {
    try {
      const id = req.params.id;
      console.info('bandas-.obtiene(), INICIO', id);
      const respuesta = await bandasSelect(id);
      console.info('bandas-db.obtiene(), salidaApp', JSON.stringify(respuesta));
      return res.status(200).send(respuesta);
    } catch (e) {
      console.info('bandas-db.obtiene(), catch', e);
      return res.status(400).send(e);
    }
};

const bandasObtieneAll = async (req, res) => {
    try {
      console.info('bandas-.obtiene(), INICIO');
      const respuesta = await bandasSelectAll();
      console.info('bandas-db.obtiene(), salidaApp', JSON.stringify(respuesta));
      return res.status(200).send(respuesta);
    } catch (e) {
      console.info('bandas-db.obtiene(), catch', e);
      return res.status(400).send(e);
    }
  
};

const bandasElimina = async (req, res) => {
    try {
      const id = req.params.id;
      console.info('bandas.Elimina(), INICIO', id);
      const respuesta = await bandasRemove(id);
      console.info('bandas-.Elimina(), respuesta', JSON.stringify(respuesta));
      return res.status(200).send(respuesta);
    } catch (e) {
      console.info('bandas-.Elimina(), catch', e);
      return res.status(400).send(e);
    }
};

const bandasActualiza = async (req, res) => {
  
    try {
      console.info('bandas.Actualiza(), INICIO');
      const schema = await getModSchema();
      const { body } = req;
      await validaRequestSchema(body, schema);
      const respuesta = await bandasUpdate(body);
      console.info('bandas.Actualiza(), salidaApp', JSON.stringify(respuesta));
      return res.status(200).send({update: true});
    } catch (e) {
      console.info('bandas.Actualiza(), catch', e);
      return res.status(400).send(e);
    }
};

const bandasCrea = async (req, res) => {
    try {
      console.info('bandas.Crea(), INICIO');
      const schema = await getModSchema();
      const { body } = req;
      await validaRequestSchema(body, schema);
      const respuesta = await bandasInsert(body);
      console.info('bandas.Crea(), salidaApp', JSON.stringify(respuesta));
      return res.status(200).send({insert: true});
    } catch (e) {
      console.info('bandas.Crea(), catch', e);
      return res.status(400).send(e);
    }
};

module.exports = {
  bandasObtiene,
  bandasObtieneAll,
  bandasElimina,
  bandasActualiza,
  bandasCrea
};