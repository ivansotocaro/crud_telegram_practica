const db = require("mongoose");

// Connexion con la base de datos
db.Promise = global.Promise;

async function connect(url) {
  // "mongodb+srv://db_user_telegram:tqaDYi20gzQEfPDe@cluster0.50ia3.mongodb.net/telegram?retryWrites=true&w=majority",
  await db
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "telegram",
    })
    .then(() => console.log("[db] Conectada con éxito"))
    .catch((err) => console.error("[db]", err));
}

// mongodb+srv://db_user_telegram:tqaDYi20gzQEfPDe@cluster0.50ia3.mongodb.net/telegram?retryWrites=true&w=majority
module.exports = connect;
