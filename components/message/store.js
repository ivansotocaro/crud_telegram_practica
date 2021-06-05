const Model = require("./model");

// Guargar los datos
function addMessage(textMessage) {
  const myMessage = new Model(textMessage);
  myMessage.save();
}

// retornar los datos
async function getMessage(filterUser) {
  let filter = {};
  if (filterUser !== null) {
    filter = { user: filterUser };
  }
  const message = await Model.find(filter);
  return message;
}

async function updateText(id, Textmessage) {
  // Traigo el documento que quiero actualizar
  const foundmessage = await Model.findById(id);
  // Le asigno el nuevo valor
  foundmessage.message = Textmessage;
  // Lo guardo el documento y se lo asigno a una variable al mismo tiempo
  const newMessage = await foundmessage.save();
  return newMessage;
}

function removeMessage(id) {
  return Model.findByIdAndDelete(id);
}

module.exports = {
  add: addMessage,
  list: getMessage,
  updateText,
  remove: removeMessage,
};
