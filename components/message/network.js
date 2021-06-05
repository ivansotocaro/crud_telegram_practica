const express = require("express");

const response = require("../../network/response");

const controller = require("./controller");

const router = express.Router();

//  Aqui estan todas nuestras rutas a la cual se redireciona por el Middleware
// que tengo en el archivo Server.js
router.get("/", function (req, res) {
  const filterUser = req.query.user || null;

  controller
    .getMessage(filterUser)
    .then((result) => {
      response.success(req, res, result, 200);
    })
    .catch((err) => {
      response.error(req, res, err, 400, "Algo salio mal internamente");
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

router.patch("/:id", function (req, res) {
  controller
    .updateMessage(req.params.id, req.body.message)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((err) => {
      response.error(req, res, "Error interno", 500, err);
    });
});

router.delete("/:id", function (req, res) {
  controller
    .deleteMessage(req.params.id)
    .then(() => {
      response.success(req, res, `Usuario ${req.params.id} eliminado`, 200);
    })
    .catch((err) => {
      response.error(req, res, "Error interno", 500, err);
    });
});

module.exports = router;
