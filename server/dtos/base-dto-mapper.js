const _ = require("lodash");

class BaseDtoMapper {
  static keys() {
    return ["id"];
  }

  static map(model) {
    return _.pick(model, this.keys());
  }
}

module.exports = { BaseDtoMapper };
