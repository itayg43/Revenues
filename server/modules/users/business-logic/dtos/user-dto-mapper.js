const { BaseDtoMapper } = require("../../../../dtos/base-dto-mapper");

class UserDtoMapper extends BaseDtoMapper {
  static keys() {
    return ["id", "name", "email", "registeredAt"];
  }
}

module.exports = { UserDtoMapper };
