const express = require("express");

const response = require("../../network/response");

const controller = require("./controller");

const router = express.Router();

//  Aqui estan todas nuestras rutas a la cual se redireciona por el Middleware
// que tengo en el archivo Server.js
router.get("/", function (req, res) {
  console.log(req.headers);
  res.header({
    "custom-header": "Nuestro valor personalizafo",
  });
  response.success(req, res, "Lista de mensaje");
});

router.post("/", function (req, res) {
  controller.addMessage(req.body.user, req.body.message);

  if (req.query.error == "ok") {
    response.error(req, res, "Error ", 400, "Es solo una simulacion");
  } else {
    response.success(req, res, "Se ha creado correctamente", 201);
  }
});

router.delete("/", function (req, res) {
  response.success(req, res, "El mensaje se ha eliminado");
});

module.exports = router;
