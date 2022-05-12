const selectMapper = async (data) => {
	return {
		id: data
	};
}

const insertMapper = async (data) => {
	return {
		id: data.id,
		band: data.band,
		year: data.year,
		image_uris: data.image_uris,
		rockbanddescription: data.rockbanddescription
	};
}

const updateMapper = async (data) => {
	return {
		id: data.id,
		band: data.band,
		year: data.year,
		image_uris: data.image_uris,
		rockbanddescription: data.rockbanddescription
	};
}

const deleteMapper = async (id) => {
	return {
		id: id
	};
}


module.exports = { selectMapper, insertMapper, updateMapper, deleteMapper };