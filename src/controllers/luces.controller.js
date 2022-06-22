const googleSheet = require("../spreadsheets");

async function getLuces(req, res){
    try {
      const registros = await googleSheet.getAllLuces();
      res.send(registros);
    } catch (err) {
      console.log(err);
    }
};
async function getLucesById(req, res){
    try {
      const registros = await googleSheet.getLucesById(req.params.id);
      res.send(registros);
    } catch (err) {
      console.log(err);
    }
};

module.exports = {
    getLuces,
    getLucesById
}