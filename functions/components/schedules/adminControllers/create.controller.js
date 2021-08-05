const ScheduleDTO = require('../dto')
const ScheduleModel = require('../model')

module.exports = async (req, res, next) => {
  let result, count
  try {
    result = await ScheduleModel.find({
      isActive: true,
      isLock: false,
      isDelete: false
    })

    count = await ScheduleModel.countDocuments({
      isActive: true,
      isLock: false,
      isDelete: false
    })

    res.status(200).json({
      error: false,
      data: result.length > 0 ? result.map((e) => ScheduleDTO.RefInterface(e)) : [],
      count
    })
  } catch (error) {
    next(error)
  }
}
