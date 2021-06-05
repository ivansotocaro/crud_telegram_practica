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

function getMessage(filterUser) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser));
  });
}

function updateMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      reject("Dato invalido");
    } else {
      const result = await store.updateText(id, message);
      resolve(result);
    }
  });
}

function deleteMessage(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject("id invalido");
    } else {
      store
        .remove(id)
        .then(() => {
          resolve("Todo esta bien");
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
}

module.exports = {
  addMessage,
  getMessage,
  updateMessage,
  deleteMessage,
};
