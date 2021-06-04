const store = require("./store");

// Funcion para guardar los mensajes
function addMessage(user, message) {
  return new Promise((resolve, reject) => {
    // valida que no este vacio los campos
    if (!user || !message) {
      console.error("[messageController] no hay usuario o mensaje");
      reject("Todos los campos son necesarios");
      return false;
    }
    // Objetos de nuestro mensaje
    const fullMessage = {
      user,
      message,
      date: new Date(),
    };

    // mandar los datos al store
    store.add(fullMessage);
    resolve(fullMessage);
  });
}

function getMessage() {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  });
}

module.exports = {
  addMessage,
  getMessage,
};
