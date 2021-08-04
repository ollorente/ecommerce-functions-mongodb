const StoreDTO = require('../dto')
const StoreModel = require('../model')
const sluglify = require('../../../utils/sluglify')

module.exports = async (req, res, next) => {
  const { userId, name, url, ssl, geo, isActive } = req.body

  const URL = url ? sluglify(url) : sluglify(name)
  const LOCATION = geo || '4,-72'
  const GEO = LOCATION.split(',')
  const COORDINATE = [GEO[1].trim(), GEO[0].trim()]

  const urlData = await StoreModel.findOne({ url: URL })

  if (urlData) {
    return res.status(400).json({
      error: true,
      message: 'Store exists.'
    })
  }

  const newData = new StoreModel({
    userId,
    name,
    url: URL,
    ssl: ssl || '',
    geo: {
      type: 'Point',
      coordinates: COORDINATE
    },
    isActive
  })

  let result
  try {
    result = await newData.save()

    res.status(201).json({
      error: false,
      data: StoreDTO.Interface(result)
    })
  } catch (error) {
    next(error)
  }
}
