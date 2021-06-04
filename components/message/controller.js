// Funcion para guardar los mensajes
function addMessage(user, message) {
  // Objetos de nuestro mensaje
  const fullMessage = {
    user,
    message,
    date: new Date(),
  };
  console.log(fullMessage);
}

module.exports = {
  addMessage,
};
