const list = [
  {
    user: "ivanTelegram",
    massage: "Hola! Bienvenido a nuestra app de mansajeria",
  },
];

// Guargar los datos
function addMessage(message) {
  list.push(message);
}

// retornar los datos
function getMessage() {
  return list;
}

module.exports = {
  add: addMessage,
  list: getMessage,
};
