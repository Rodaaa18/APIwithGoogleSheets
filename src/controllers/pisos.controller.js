const googleSheet = require("../spreadsheets");

async function getPisos(req, res){
    try {
      const registros = await googleSheet.getAllPisos();
      res.send(registros);
    } catch (err) {
      console.log(err);
    }
};
async function getPisosById(req, res){
    try {
      const registros = await googleSheet.getPisosbyId(req.params.id);
      res.send(registros);
    } catch (err) {
      console.log(err);
    }
};

module.exports = {
    getPisos,
    getPisosById
}