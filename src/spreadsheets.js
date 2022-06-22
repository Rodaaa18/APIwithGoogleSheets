const { GoogleSpreadsheet } = require("google-spreadsheet");

const credentials = require("./json/credentials.json");

let googleId = "1GH4-SriMOXj_umoYInO1Kr2SNQPNMikeJfmvKz90p-M";

// -----------------------------------------------------------------------SEÑALIZACIÓN
async function getAll() {
  const doc = new GoogleSpreadsheet(googleId);
  await doc.useServiceAccountAuth(credentials);
  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[0];
  const registros = await sheet.getRows();

  let resp = registros.map((reg) => {
    let body = {
      id: reg.CODIGO_FABRICA,
      descripcion: reg.DESCRIPCION,
      precio: reg.PRECIO_UNITARIO,
      colores: reg.COLORES,
      imagen: reg.IMAGEN,
      cantidad: reg.CANTIDAD,
      total: reg.TOTAL,
    };
    return body;
  });
  return resp;
}
const getbyId = async (id) => {
  const doc = new GoogleSpreadsheet(googleId);
  await doc.useServiceAccountAuth(credentials);
  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[0];
  const registros = await sheet.getRows();
  let resp = registros.map((reg) => {
    let body = {
      id: reg.CODIGO_FABRICA,
      descripcion: reg.DESCRIPCION,
      precio: reg.PRECIO_UNITARIO,
      colores: reg.COLORES,
      imagen: reg.IMAGEN,
      cantidad: reg.CANTIDAD,
      total: reg.TOTAL,
    };
    return body;
  });
  for (let i = 0; i < resp.length; i++) {
    if (resp[i].id === id) {
      return resp[i];
    }
  }
  return resp;
};
// -----------------------------------------------------------------------TACHOS
async function getAllTachos() {
  const doc = new GoogleSpreadsheet(googleId);
  await doc.useServiceAccountAuth(credentials);
  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[1];
  const registros = await sheet.getRows();

  let resp = registros.map((reg) => {
    let body = {
      id: reg.CODIGO_FABRICA,
      descripcion: reg.DESCRIPCION,
      precio: reg.PRECIO_UNITARIO,
      colores: reg.COLORES,
      imagen: reg.IMAGEN,
      cantidad: reg.CANTIDAD,
      total: reg.TOTAL,
    };
    return body;
  });
  return resp;
}
const getTachosbyId = async (id) => {
  const doc = new GoogleSpreadsheet(googleId);
  await doc.useServiceAccountAuth(credentials);
  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[1];
  const registros = await sheet.getRows();
  let resp = registros.map((reg) => {
    let body = {
      id: reg.CODIGO_FABRICA,
      descripcion: reg.DESCRIPCION,
      precio: reg.PRECIO_UNITARIO,
      colores: reg.COLORES,
      imagen: reg.IMAGEN,
      cantidad: reg.CANTIDAD,
      total: reg.TOTAL,
    };
    return body;
  });
  for (let i = 0; i < resp.length; i++) {
    if (resp[i].id === id) {
      return resp[i];
    }
  }
  return resp;
};
// -----------------------------------------------------------------------LUCES LED
async function getAllLuces() {
  const doc = new GoogleSpreadsheet(googleId);
  await doc.useServiceAccountAuth(credentials);
  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[2];
  const registros = await sheet.getRows();

  let resp = registros.map((reg) => {
    let body = {
      id: reg.CODIGO_FABRICA,
      descripcion: reg.DESCRIPCION,
      precio: reg.PRECIO_UNITARIO,
      imagen: reg.IMAGEN,  
      cantidad: reg.CANTIDAD,
      total: reg.TOTAL,
    };
    return body;
  });
  return resp;
}
const getLucesbyId = async (id) => {
  const doc = new GoogleSpreadsheet(googleId);
  await doc.useServiceAccountAuth(credentials);
  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[2];
  const registros = await sheet.getRows();
  let resp = registros.map((reg) => {
    let body = {
      id: reg.CODIGO_FABRICA,
      descripcion: reg.DESCRIPCION,
      precio: reg.PRECIO_UNITARIO,
      imagen: reg.IMAGEN,
      colores: reg.COLORES,      
      cantidad: reg.CANTIDAD,
      total: reg.TOTAL,
    };
    return body;
  });
  for (let i = 0; i < resp.length; i++) {
    if (resp[i].id === id) {
      return resp[i];
    }
  }
  return resp;
};
// -----------------------------------------------------------------------VALLAS
async function getAllVallas() {
  const doc = new GoogleSpreadsheet(googleId);
  await doc.useServiceAccountAuth(credentials);
  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[3];
  const registros = await sheet.getRows();

  let resp = registros.map((reg) => {
    let body = {
      id: reg.CODIGO_FABRICA,
      descripcion: reg.DESCRIPCION,
      precio: reg.PRECIO_UNITARIO,
      colores: reg.COLORES,
      imagen: reg.IMAGEN,
      cantidad: reg.CANTIDAD,
      total: reg.TOTAL,
    };
    return body;
  });
  return resp;
}
const getVallasbyId = async (id) => {
  const doc = new GoogleSpreadsheet(googleId);
  await doc.useServiceAccountAuth(credentials);
  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[3];
  const registros = await sheet.getRows();
  let resp = registros.map((reg) => {
    let body = {
      id: reg.CODIGO_FABRICA,
      descripcion: reg.DESCRIPCION,
      precio: reg.PRECIO_UNITARIO,
      colores: reg.COLORES,
      imagen: reg.IMAGEN,
      cantidad: reg.CANTIDAD,
      total: reg.TOTAL,
    };
    return body;
  });
  for (let i = 0; i < resp.length; i++) {
    if (resp[i].id === id) {
      return resp[i];
    }
  }
  return resp;
};
// -----------------------------------------------------------------------CESTOS
async function getAllCestos() {
  const doc = new GoogleSpreadsheet(googleId);
  await doc.useServiceAccountAuth(credentials);
  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[4];
  const registros = await sheet.getRows();

  let resp = registros.map((reg) => {
    let body = {
      id: reg.CODIGO_FABRICA,
      descripcion: reg.DESCRIPCION,
      precio: reg.PRECIO_UNITARIO,
      colores: reg.COLORES,
      imagen: reg.IMAGEN,
      cantidad: reg.CANTIDAD,
      total: reg.TOTAL,
    };
    return body;
  });
  return resp;
}
const getCestosbyId = async (id) => {
  const doc = new GoogleSpreadsheet(googleId);
  await doc.useServiceAccountAuth(credentials);
  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[4];
  const registros = await sheet.getRows();
  let resp = registros.map((reg) => {
    let body = {
      id: reg.CODIGO_FABRICA,
      descripcion: reg.DESCRIPCION,
      precio: reg.PRECIO_UNITARIO,
      colores: reg.COLORES,
      imagen: reg.IMAGEN,
      cantidad: reg.CANTIDAD,
      total: reg.TOTAL,
    };
    return body;
  });
  for (let i = 0; i < resp.length; i++) {
    if (resp[i].id === id) {
      return resp[i];
    }
  }
  return resp;
};
// -----------------------------------------------------------------------REDUCTORES DE VELOCIDAD
async function getAllReduct() {
  const doc = new GoogleSpreadsheet(googleId);
  await doc.useServiceAccountAuth(credentials);
  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[5];
  const registros = await sheet.getRows();

  let resp = registros.map((reg) => {
    let body = {
      id: reg.CODIGO_FABRICA,
      descripcion: reg.DESCRIPCION,
      precio: reg.PRECIO_UNITARIO,
      colores: reg.COLORES,
      imagen: reg.IMAGEN,
      cantidad: reg.CANTIDAD,
      total: reg.TOTAL,
    };
    return body;
  });
  return resp;
}
const getReductbyId = async (id) => {
  const doc = new GoogleSpreadsheet(googleId);
  await doc.useServiceAccountAuth(credentials);
  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[5];
  const registros = await sheet.getRows();
  let resp = registros.map((reg) => {
    let body = {
      id: reg.CODIGO_FABRICA,
      descripcion: reg.DESCRIPCION,
      precio: reg.PRECIO_UNITARIO,
      colores: reg.COLORES,
      imagen: reg.IMAGEN,
      cantidad: reg.CANTIDAD,
      total: reg.TOTAL,
    };
    return body;
  });
  for (let i = 0; i < resp.length; i++) {
    if (resp[i].id === id) {
      return resp[i];
    }
  }
  return resp;
};
// -----------------------------------------------------------------------PISOS
async function getAllPisos() {
  const doc = new GoogleSpreadsheet(googleId);
  await doc.useServiceAccountAuth(credentials);
  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[6];
  const registros = await sheet.getRows();

  let resp = registros.map((reg) => {
    let body = {
      id: reg.CODIGO_FABRICA,
      descripcion: reg.DESCRIPCION,
      precio: reg.PRECIO_UNITARIO,
      colores: reg.COLORES,
      imagen: reg.IMAGEN,
      cantidad: reg.CANTIDAD,
      total: reg.TOTAL,
    };
    return body;
  });
  return resp;
}
const getPisosbyId = async (id) => {
  const doc = new GoogleSpreadsheet(googleId);
  await doc.useServiceAccountAuth(credentials);
  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[6];
  const registros = await sheet.getRows();
  let resp = registros.map((reg) => {
    let body = {
      id: reg.CODIGO_FABRICA,
      descripcion: reg.DESCRIPCION,
      precio: reg.PRECIO_UNITARIO,
      colores: reg.COLORES,
      imagen: reg.IMAGEN,
      cantidad: reg.CANTIDAD,
      total: reg.TOTAL,
    };
    return body;
  });
  for (let i = 0; i < resp.length; i++) {
    if (resp[i].id === id) {
      return resp[i];
    }
  }
  return resp;
};
module.exports = {
  getAll: getAll,
  getbyId: getbyId,
  getAllTachos: getAllTachos,
  getTachosbyId: getTachosbyId,
  getAllLuces: getAllLuces,
  getLucesbyId: getLucesbyId,
  getAllVallas: getAllVallas,
  getVallasbyId: getVallasbyId,
  getAllCestos: getAllCestos,
  getCestosbyId: getCestosbyId,
  getAllReduct: getAllReduct,
  getReductbyId: getReductbyId,
  getAllPisos: getAllPisos,
  getPisosbyId: getPisosbyId,
};
