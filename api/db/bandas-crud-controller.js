const { executeSQL } = require("../util/mysql-util");
const { selectMapper, deleteMapper, updateMapper, insertMapper } = require("./bandas-mapper");
const { responseMapper } = require("./bandas-response");
const { sqlInsert, sqlUpdate, sqlSelect, sqlSelectAll, sqlDeleteBanda } = require('./bandas-sql');
const bandasSelect = async (body) => {
  const promise = new Promise(async (resolve, reject) => {
    try {
      console.info('bandas-db.select(), INICIO');
      const data = await selectMapper(body);
      const respuesta = await executeSQL(sqlSelect, data);
      const salidaApp = await responseMapper(respuesta);
      console.info('bandas-db.select(), salidaApp', JSON.stringify(salidaApp));
      resolve(salidaApp);
    } catch (e) {
      console.info('bandas-db.select(), catch', e);
      reject(e);
      return;
    }
  });
  return promise;
};

const bandasSelectAll = async () => {
  const promise = new Promise(async (resolve, reject) => {
    try {
      console.info('bandas-db.select(), INICIO');
      const respuesta = await executeSQL(sqlSelectAll, {});
      const salidaApp = await responseMapper(respuesta);
      console.info('bandas-db.select(), salidaApp', JSON.stringify(salidaApp));
      resolve(salidaApp);
    } catch (e) {
      console.info('bandas-db.select(), catch', e);
      reject(e);
      return;
    }
  });
  return promise;
};

const bandasRemove = async (body) => {
  const promise = new Promise(async (resolve, reject) => {
    try {
      console.info('bandas-db.remove(), INICIO');
      const data = await deleteMapper(body);
      const respuesta = await executeSQL(sqlDeleteBanda, data);
      console.info('bandas-db.remove(), respuesta', JSON.stringify(respuesta));
      resolve({ del: true });
    } catch (e) {
      console.info('bandas-db.remove(), catch', e);
      reject(e);
      return;
    }
  });
  return promise;
};

const bandasUpdate = async (body) => {
  const promise = new Promise(async (resolve, reject) => {
    try {
      console.info('bandas-db.update(), INICIO');
      const data = await updateMapper(body);
      const respuesta = await executeSQL(sqlUpdate, data);
      console.info('bandas-db.update(), salidaApp', JSON.stringify(respuesta));
      resolve(respuesta);
    } catch (e) {
      console.info('bandas-db.update(), catch', e);
      reject(e);
      return;
    }
  });
  return promise;
};
const bandasInsert = async (body) => {
  const promise = new Promise(async (resolve, reject) => {
    try {
      console.info('bandas-db.insert(), INICIO');
      const data = await insertMapper(body);
      const respuesta = await executeSQL(sqlInsert, data);
      console.info('bandas-db.insert(), salidaApp', JSON.stringify(respuesta));
      resolve(respuesta);
    } catch (e) {
      console.info('bandas-db.insert(), catch', e);
      reject(e);
      return;
    }
  });
  return promise;
};

module.exports = {
  bandasSelect,
  bandasSelectAll,
  bandasUpdate,
  bandasRemove,
  bandasInsert
};