const dataAccess = require("../data-access/users-data-access");

async function register(values) {
  const user = await dataAccess.register(values);
  return user;
}

module.exports = {
  register,
};
