const url = 'http://www.wikidata.org/entity/';

const getValue = (obj) => {
	return obj === undefined ? '' : obj.value;
}

const replaceUrl = (obj) => {
	const value = getValue(obj);
	return value.replace(url, '');
}

const formatRockBandJson = (arr) => {
	return arr.map((element) => ({
		id: replaceUrl(element.rockBand),
		year: getValue(element.year),
		image_uris: getValue(element.image),
		name: getValue(element.rockBandLabel),
		rockBandDescription: getValue(element.rockBandDescription),
	}))
}

const formatCountriesJson = (arr) => {
	return arr.map((element) => ({
		id: replaceUrl(element.country),
		search_uri: getValue(element.country),
		icon_svg_uri: getValue(element.image),
		name: getValue(element.countryLabel),
	}))
}

module.exports = { formatRockBandJson, formatCountriesJson };