module.exports = {
  error: {
    client: {
      bad_request: 400,
      unauthorized: 401,
      not_found: 404,
    },
    server: {
      internal: 500,
    },
  },
  success: {
    ok: 200,
    created: 201,
  },
};
