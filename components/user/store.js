const Model = require("./model");

function addUser(user) {
  const myUser = new Model(user);
  return myUser.save();
}

async function ListUser(filter) {
  const user = await Model.find(filter);
  return user;
}

module.exports = {
  add: addUser,
  list: ListUser,
};
