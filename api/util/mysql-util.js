const postgres = require('postgres');

const dataConect = {
  host: 'ec2-54-164-40-66.compute-1.amazonaws.com',
  database: 'd3jq05cdjsp4m7',
  port: '5432',
  user: 'yuhfthsdkdtuap',
  password: '01c3abcf293e63a94876ee27098bc9392477d11ffec9fb9abe0ba02de7a7dd7c',
  ssl: { rejectUnauthorized: false }

};

const executeSQL = async (fn, data) => {

  const promise = new Promise(async function (resolve, reject) {
    try {
      const sql = postgres('postgres://yuhfthsdkdtuap:01c3abcf293e63a94876ee27098bc9392477d11ffec9fb9abe0ba02de7a7dd7c@ec2-54-164-40-66.compute-1.amazonaws.com:5432/d3jq05cdjsp4m7', dataConect);
      console.log(fn);
      var results = await fn(sql, data);
      console.log(results);
      resolve(results);
    } catch (e) {
      console.info('mysql-util.executeSQL(),error:', e);
      reject(e);
    }
  });
  return promise;
};


module.exports = { executeSQL };