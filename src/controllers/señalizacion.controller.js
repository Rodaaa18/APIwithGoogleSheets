const googleSheet = require("../spreadsheets");

// Funcion para Obtener todos los Productos de Señalización.
async function getSeñalizacion(req, res) {
    try {
      const registros = await googleSheet.getAll();
      res.send(registros);
    } catch (err) {
      console.log(err);
    }
};
// Funcion para Obtener un Producto de Señalización por ID.
async function getSeñalizacionById(req, res) {
    try {
        const registros = await googleSheet.getById(req.params.id);
        res.send(registros);
        }
    catch (err) {
        console.log(err);
        }
};


module.exports={
    getSeñalizacion,
    getSeñalizacionById
}