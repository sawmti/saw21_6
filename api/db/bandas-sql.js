const sqlInsert = async (sql, data) => {
  return sql`INSERT INTO usmbandas.Bandas
      ${sql(data, 'id', 'band', 'year', 'image_uris', 'rockbanddescription')} 
    `
}

const sqlUpdate = async (sql, data) => {
  return sql`UPDATE usmbandas.Bandas SET 
  ${sql(data, 'band', 'year', 'image_uris', 'rockbanddescription')} 
  where id = ${data.id}`
}
const sqlSelect = async (sql, data) => {
  return sql`SELECT 
     id, 
     band, 
     year, 
     image_uris, 
     rockbanddescription
     FROM usmbandas.Bandas
     WHERE
     id = ${data.id}`
}
const sqlSelectAll = async (sql, data) => {
  return sql`SELECT 
     id, 
     band, 
     year, 
     image_uris, 
     rockbanddescription
     FROM usmbandas.Bandas`;
}
const sqlDeleteBanda = async (sql, data) => {
  return sql`DELETE FROM usmbandas.Bandas
     WHERE 
     id = ${data.id}`
}


module.exports = { sqlInsert, sqlUpdate, sqlSelect, sqlSelectAll, sqlDeleteBanda };