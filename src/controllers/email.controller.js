const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

async function emailSend(req, res) {
  const { nombreRazon, direccion, telefono, email, products, total } = req.body;

  contentHTML = `
   <h1>Nuevo Presupuesto:</h1>
   <h3>Datos</h3>
   <ul>
      <li>Nombre: ${nombreRazon}</li>
      <li>Direccion: ${direccion}</li>
      <li>Telefono: ${telefono}</li>
      <li>Mail: ${email}</li>
   </ul>
    <h3>Productos</h3>
    <table border="1">
    <thead>
      <tr>
        <th>ID</th>
        <th>Producto</th>
        <th>Precio unitario</th>
        <th>Colores</th>
        <th>Cantidad</th>
        <th>Total</th>
      </tr>
    </thead>
      ${products
        .map(
          (i) => `
                  <tbody>
                    <tr>
                      <td>${i.id}</td>
                      <td>${i.descripcion}</td>
                      <td>${i.precio}</td>
                      <td>${i.colores}</td>
                      <td>${i.cantidad}</td>
                      <td>${i.total}</td>
                    </tr>                    
                  </tbody>`
        )
        .join("")}
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td><p>Total:</p></td>
          <td><span>$</span>${total}</td>
        </tr>
    </table>
   `;
  const createTransporter = async () => {
    const oauth2Client = new OAuth2(
      "Aqui incertar el Client ID",
      "Aqui incertar el Client Secret",
      "https://developers.google.com/oauthplayground"
    );
    console.log(process.env.CLIENT_ID);
    oauth2Client.setCredentials({
      refresh_token: "Aqui incertar el Refresh TOKEN",
    });

    const accessToken = await new Promise((resolve, reject) => {
      oauth2Client.getAccessToken((err, token) => {
        if (err) {
          reject("Failed to create access token :(");
        }
        resolve(token);
      });
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "Email de envio",
        accessToken,
        clientId: "Incertar el Client ID",
        clientSecret: "Incertar el Client Secret",
        refreshToken: "Incertar Refresh TOKEN",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    return transporter;
  };
  const sendEmail = async (emailOptions) => {
    try {
      let emailTransporter = await createTransporter();
      await emailTransporter.sendMail(emailOptions);
    } catch (err) {
      console.log(err);
    }
  };

  sendEmail({
    subject: "Nuevo Presupuesto",
    text: "Nuevo Presupuesto",
    to: "email a quien ira dirigido",
    from: "email desde el cual se enviara",
    html: contentHTML,
  });
  res.send("recived");
  console.log("Mensaje enviado");
}

module.exports = {
  emailSend,
};
