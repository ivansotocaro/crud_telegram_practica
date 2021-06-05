const db = require("mongoose");
const Model = require("./model");

// Connexion con la base de datos
db.Promise = global.Promise;
// mongodb+srv://db_user_telegram:tqaDYi20gzQEfPDe@cluster0.50ia3.mongodb.net/telegram?retryWrites=true&w=majority
db.connect(
  "mongodb+srv://db_user_telegram:tqaDYi20gzQEfPDe@cluster0.50ia3.mongodb.net/telegram?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "telegram",
  }
)
  .then(() => console.log("[db] Conectada con éxito"))
  .catch((err) => console.error("[db]", err));

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
