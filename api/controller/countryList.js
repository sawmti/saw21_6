const querystring = require("querystring");
const https = require('https');
const { formatCountriesJson } = require("../util/format");
const { callWiki } = require("../util/wiki-call");

const countryList = async (req, res) => {
  console.log(`Searching ${req.params.id}`);
  const query = `SELECT ?country ?countryLabel ?image
          WHERE 
          {
            ?country wdt:P31 wd:Q6256. # Must be of a cat
            ?country wdt:P41 ?image.
            SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". } # Helps get the label in your language, if not, then en language
          }`;
  const resultado = await callWiki(query, formatCountriesJson);
  res.send({ data: resultado })
}

module.exports = { countryList }