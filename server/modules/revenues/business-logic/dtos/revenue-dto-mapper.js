const { BaseDtoMapper } = require("../../../../dtos/base-dto-mapper");

class RevenueDtoMapper extends BaseDtoMapper {
  static keys() {
    return ["shifts", "vat", "commission", "taxes", "expenses", "net"];
  }
}

module.exports = { RevenueDtoMapper };
