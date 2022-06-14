const express = require("express");
const app = express();
const googleSheet = require("./spreadsheet");

//Rutas
app.get("/", async (req, res) => {
  try {
    const registros = await googleSheet.getAll();
    res.send(registros);
  } catch (err) {
    if (!registros) {
      res.status(500).send("Error al obtener los registros");
    }
  }
});

app.get;

module.exports = app;
