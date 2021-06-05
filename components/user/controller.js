const store = require("./store");

function addUser(name) {
  if (!name) {
    return Promise.reject("Invalid Name");
  }
  const user = {
    name,
  };

  return store.add(user);
}

function listUser(filterUserName) {
  return new Promise((resolve, reject) => {
    let user = {};
    if (filterUserName !== null) {
      user = {
        name: filterUserName,
      };
    }
    resolve(store.list(user));
  });
}

module.exports = {
  addUser,
  listUser,
};
