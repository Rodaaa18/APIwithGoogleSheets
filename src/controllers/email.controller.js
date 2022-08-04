const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;


const formatterDolar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

async function emailSend(req, res) {
    const { nombreRazon, direccion, telefono, email, products, total , responsable} = req.body;

  contentHTML = `
   <h1>Nota de Pedido</h1>
   <h3>Datos</h3>
   <ul>
      <li>Nombre/Razón: ${nombreRazon}</li>
      <li>Responsable:${responsable}</li>
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
                      <td align="right">${i.precio}</td>
                      <td>${i.colores}</td>
                      <td align="center">${i.cantidad}</td>
                      <td align="right">${formatterDolar.format(i.total)}</td>
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
          <td align="right">${formatterDolar.format(total)}</td>
        </tr>
    </table>
   `;
  const createTransporter = async () => {
    const oauth2Client = new OAuth2(
      "136098971799-lohm61ab19230nf98mgnhb8no3e0b0v9.apps.googleusercontent.com",
      "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",
      "https://developers.google.com/oauthplayground"
    );
    oauth2Client.setCredentials({
      refresh_token:
        "1//04nhZsYwBbtb_CgYIARAAGAQSNwF-L9Irf_nOpxX1KX54fY8FGUWmhe5Mx4evmdZGxBaF0n-wsubqHYTqdnDkjGvTh0zwl-XSVJ8",
    });

    /* const accessToken = await new Promise((resolve, reject) => {
      oauth2Client.getAccessToken((err, token) => {
        if (err) {
          console.log(err);
          reject("Failed to create access token :(");
        }
        resolve(token);
      });
    }); */
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'apiproductinft@gmail.com',
        pass: 'qzufzwxcmsjxngvo'
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    /* const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "apiproductinft@gmail.com",
        accessToken,
        clientId:
          "136098971799-lohm61ab19230nf98mgnhb8no3e0b0v9.apps.googleusercontent.com",
        clientSecret: "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",
        refreshToken:
          "1//04nhZsYwBbtb_CgYIARAAGAQSNwF-L9Irf_nOpxX1KX54fY8FGUWmhe5Mx4evmdZGxBaF0n-wsubqHYTqdnDkjGvTh0zwl-XSVJ8",          
        expires: 1484314697598,
      },
      tls: {
        rejectUnauthorized: false,
      },
    }); */

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

  })
  sendEmail({
    from:'"GGMM alicia@inft.com.ar" <alicia@inft.com.ar>',
    subject: "Nota de pedido",
    text: "Nueva Nota de Pedido",
    to: "alicia@inft.com.ar",
    cc: "luis@inft.com.ar, daniela@inft.com.ar",
    html: contentHTML
  });
  res.send("received");
}


module.exports = {
    emailSend,
};