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
// -----------------------------------------------------------------------DEPENDENCIES
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// -----------------------------------------------------------------------EMAIL
app.use("/email", email_route);
// -----------------------------------------------------------------------SEÑALIZACION
app.use("/products", señal_route);
// -----------------------------------------------------------------------TACHOS
app.use("/products", tachos_route);
// -----------------------------------------------------------------------LUCES LED
app.use("/products", luces_route);
// -----------------------------------------------------------------------VALLAS
app.use("/products", vallas_route);
// -----------------------------------------------------------------------CESTOS
app.use("/products", cestos_route);
// -----------------------------------------------------------------------REDUCTORES
app.use("/products", reduct_route);
// -----------------------------------------------------------------------PISOS
app.use("/products", pisos_route);

app.listen(port, () => {
  console.log(`Server On at port: ${port}`);
});
