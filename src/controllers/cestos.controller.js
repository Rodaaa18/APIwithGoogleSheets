const googleSheet = require("../spreadsheets");

async function getCestos(req, res){
    try {
      const registros = await googleSheet.getAllCestos();
      res.send(registros);
    } catch (err) {
      console.log(err);
    }
};
async function getCestosById(req, res){
    try {
      const registros = await googleSheet.getCestosbyId(req.params.id);
      res.send(registros);
    } catch (err) {
      console.log(err);
    }
};

module.exports = {
    getCestos,
    getCestosById
}