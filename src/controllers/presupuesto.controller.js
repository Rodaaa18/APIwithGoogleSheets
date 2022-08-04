const googleSheet = require("../spreadsheets");


async function postProduct(req, res) {
    try {
      googleSheet.postProduct(req.body);
      res.redirect("/presupuesto");
    } catch (err) {
      console.log(err);
    }
};






module.exports ={
    postProduct,
}

