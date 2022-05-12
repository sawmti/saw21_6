const responseMapper = async (columnList) => {
  const promise = new Promise(async (resolve, reject) => {
    try {
      if (columnList === undefined) {
        return resolve({});
      }
      let arrSalida = [];
      const fn = (val, index, arr) => {
        let obj = {};
        obj.id = val.id;
        obj.band = val.band;
        obj.year = val.year;
        obj.image_uris = val.image_uris;
        obj.rockbanddescription = val.rockbanddescription;
        arrSalida.push(obj);
      };
      columnList.forEach(fn);
      resolve(arrSalida);
    } catch (error) {
      reject(error);
    }
  });
  return promise;
}

module.exports = { responseMapper };