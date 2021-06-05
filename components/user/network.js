const express = require("express");

const response = require("../../network/response");

const controller = require("./controller");

const router = express.Router();

router.post("/", (req, res) => {
  controller
    .addUser(req.body.name)
    .then((result) => {
      response.success(req, res, result, 201);
    })
    .catch((err) => {
      response.error(req, res, "Internanl error", 500, err);
    });
});

router.get("/", function (req, res) {
  const filterUserName = req.query.name || null;
  controller
    .listUser(filterUserName)
    .then((result) => {
      response.success(req, res, result, 201);
    })
    .catch((err) => {
      response.error(req, res, "Error al listar usuario", 500, err);
    });
});

module.exports = router;
