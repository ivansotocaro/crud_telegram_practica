const express = require("express");

const db = require("./db");

const router = require("./network/routers");

db(
  "mongodb+srv://db_user_telegram:tqaDYi20gzQEfPDe@cluster0.50ia3.mongodb.net/telegram?retryWrites=true&w=majority"
);

// Inicializar express
const app = express();

// para poder resivir los datos de tipo string o otro, en el cuerpo de la peticion(req.body)
app.use(express.urlencoded({ extended: false }));
// Se ejecuta cuando se realiza cualquiera petición
// Lo que hace es redirecionar a la ruta a la que se haya hecho la petición
// app.use(router);
router(app);

// para acceder a mis archivos estacticos cuando la peticion sea localhost:300/app
app.use("/app", express.static("public"));

// Mi servidor esta escuchando en el puerto 3000
app.listen(3000, () => {
  console.log("La aplicacion esta escuchando en http://localhost:3000");
});
