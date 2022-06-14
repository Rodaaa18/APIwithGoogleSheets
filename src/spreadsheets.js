const { GoogleSpreadsheet } = require("google-spreadsheet");

const credentials = require("./json/credentials.json");

let googleId = "1GH4-SriMOXj_umoYInO1Kr2SNQPNMikeJfmvKz90p-M";

async function getAll() {
  const doc = new GoogleSpreadsheet(googleId);
  await doc.useServiceAccountAuth(credentials);
  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[0];
  const registros = await sheet.getRows();

  return registros.map((reg) => {
    return {
      id: reg.CODIGO_FABRICA,
      descripcion: reg.DESCRIPCION,
      precio: reg.PRECIO_UNITARIO,
      colores: reg.COLORES,
      imagen: reg.IMAGEN,
      cantidad: reg.CANTIDAD,
      total: reg.TOTAL,
    };
  });
}

module.exports = {
  getAll: getAll,
};
