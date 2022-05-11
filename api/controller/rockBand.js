
const { formatRockBandJson } = require("../util/format");
const { callWiki } = require("../util/wiki-call");

const rockBandList = async (req, res) => {
  const id = req.params.id;
  console.log(`Searching ${id}`);
  const query =
    `SELECT ?rockBand ?rockBandLabel ?rockBandDescription ?image ?year
              WHERE
              {
              ?rockBand wdt:P31 wd:Q215380.
              ?rockBand wdt:P495 wd:${id}.
              ?rockBand wdt:P2031 ?year.
              ?rockBand wdt:P18 ?image.
              SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
              }`
  const resultado = await callWiki(query, formatRockBandJson);
  res.send({ data: resultado })
}

module.exports = { rockBandList }