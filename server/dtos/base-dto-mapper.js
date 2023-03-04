const _ = require("lodash");

class BaseDtoMapper {
  keys() {
    return ["id"];
  }

  map(model) {
    return _.pick(model, this.keys);
  }
}

module.exports = BaseDtoMapper;
