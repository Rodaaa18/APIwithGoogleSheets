const googleSheet = require("../spreadsheets");

async function getReductores(req, res){
    try {
      const registros = await googleSheet.getAllReduct();
      res.send(registros);
    } catch (err) {
      console.log(err);
    }
};
async function getReductoresById(req, res){
    try {
      const registros = await googleSheet.getReductbyId(req.params.id);
      res.send(registros);
    } catch (err) {
      console.log(err);
    }
};

module.exports = {
    getReductores,
    getReductoresById
}