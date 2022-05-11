const querystring = require("querystring");
const https = require('https');
const callWiki = (query, formatFn) => {
  const promise = new Promise((resolve, reject) => {
    const queryParams = new URLSearchParams(
      [
        ['query', query],
        //['query', `select * where { wd:Q${req.params.id} }`],
        ['format', 'json']
      ]).toString();
    const options = {
      hostname: 'query.wikidata.org',
      port: 443,
      path: `/sparql?${queryParams}`,
      method: 'GET',
      headers: {
        'User-Agent': 'Example/1.0'
      }
    }
    https.get(options, httpres => {
      let data = [];
      console.log('Status Code:', httpres.statusCode);
      httpres.on('data', chunk => {
        data.push(chunk);
      });
      httpres.on('end', () => {
        console.log('Response ended:');
        const result = Buffer.concat(data).toString();
        const json = JSON.parse(result);
        const results = formatFn(json.results.bindings);
        console.log(results.bindings);
        resolve(results)
      });
    }).on('error', err => {
      console.log('Error: ', err.message);
      reject(err);
    })
  });
  return promise;
}

module.exports = { callWiki }
