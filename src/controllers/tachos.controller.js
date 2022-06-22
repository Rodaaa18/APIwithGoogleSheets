const googleSheet = require("../spreadsheets");

async function getTachos(req, res){
    try {
      const registros = await googleSheet.getAllTachos();
      res.send(registros);
    } catch (err) {
      console.log(err);
    }
}
async function getTachosById(req, res){
    try {
      const registros = await googleSheet.getTachosById(req.params.id);
      res.send(registros);
    } catch (err) {
      console.log(err);
    }
}

module.exports = {
    getTachos,
    getTachosById
}