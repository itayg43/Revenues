const usersDataAccess = require("../data-access/users-data-access");

async function registerUser(values) {
  const user = await usersDataAccess.registerUser(values);
  return user;
}

module.exports = {
  registerUser,
};
