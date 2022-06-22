const googleSheet = require("../spreadsheets");

async function getVallas(req, res){
    try {
      const registros = await googleSheet.getAllVallas();
      res.send(registros);
    } catch (err) {
      console.log(err);
    }
};
async function getVallasById(req, res){
    try {
      const registros = await googleSheet.getVallasbyId(req.params.id);
      res.send(registros);
    } catch (err) {
      console.log(err);
    }
};

module.exports = {
    getVallas,
    getVallasById
}