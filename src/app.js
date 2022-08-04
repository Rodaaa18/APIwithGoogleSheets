const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;

// -----------------------------------------------------------------------ROUTES
const email_route = require("./routes/email");
const señal_route = require("./routes/señalizacion");
const tachos_route = require("./routes/tachos");
const luces_route = require("./routes/luces");
const vallas_route = require("./routes/vallas");
const cestos_route = require("./routes/cestos");
const reduct_route = require("./routes/reductores");
const pisos_route = require("./routes/pisos");
const presup_route = require("./routes/presupuesto");
// -----------------------------------------------------------------------USO DE DEPENDENCIAS
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// -----------------------------------------------------------------------PRESUPUESTO
app.use("/presupuesto", presup_route);
// -----------------------------------------------------------------------EMAIL
app.use("/email", email_route);
// -----------------------------------------------------------------------SEÑALIZACION,TACHOS, LUCES LED, VALLAS, CESTOS, REDUCTORES, PISOS
app.use("/products", señal_route, tachos_route, luces_route, vallas_route, cestos_route, reduct_route, pisos_route);

app.listen(port, () => {
  console.log(`Server On at port: ${port}`);
});
