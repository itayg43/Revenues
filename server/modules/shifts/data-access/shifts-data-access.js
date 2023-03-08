const { Sequelize, Op } = require("sequelize");

const { Shift } = require("../../../db/models");

async function submitShift(values) {
  return await Shift.create(values);
}

async function getShiftsByUidAndMonth(uid, month) {
  return await Shift.findAll({
    where: {
      [Op.and]: [
        { uid },
        Sequelize.where(
          Sequelize.fn("month", Sequelize.col("timestamp")),
          month
        ),
      ],
    },
  });
}

module.exports = {
  submitShift,
  getShiftsByUidAndMonth,
};
