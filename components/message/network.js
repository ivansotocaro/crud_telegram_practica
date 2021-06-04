const express = require("express");

const response = require("../../network/response");

const controller = require("./controller");

const router = express.Router();

//  Aqui estan todas nuestras rutas a la cual se redireciona por el Middleware
// que tengo en el archivo Server.js
router.get("/", function (req, res) {
  controller
    .getMessage()
    .then((result) => {
      response.success(req, res, result, 200);
    })
    .catch((err) => {
      response.error(req, res, err, 400, "ALgo salio mal internamente");
    });
});

router.post("/", function (req, res) {
  controller
    .addMessage(req.body.user, req.body.message)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201);
    })
    .catch((err) => {
      response.error(
        req,
        res,
        "informacion no valida",
        400,
        "Error en el controlador"
      );
    });
});

router.delete("/", function (req, res) {
  response.success(req, res, "El mensaje se ha eliminado");
});

module.exports = router;
