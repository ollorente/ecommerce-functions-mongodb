const UserModel = require('../model')
const UserDTO = require('../dto')

module.exports = async (req, res, next) => {
  const userAuth = await UserModel.findOne({
    _id: req.user._id,
    isActive: true,
    isLock: false
  })

  if (!userAuth) {
    return res.status(403).json({
      error: true,
      message: 'Access denied'
    })
  }

  let result
  try {
    result = await UserModel.findOne({
      _id: req.params.user
    }).populate([
      {
        path: '_meetings',
        select: 'name dateInt dateEnd isActive isLock',
        options: {
          limit: 5,
          sort: {
            createdAt: -1
          }
        },
        match: {
          isActive: true,
          isLock: false
        }
      },
      {
        path: '_people',
        select: 'name photoURL email isActive isLock',
        options: {
          limit: 5,
          sort: {
            createdAt: -1
          }
        },
        match: {
          isActive: true,
          isLock: false
        }
      },
      {
        path: '_projects',
        select: 'name _collaboratorsCount _meetingsCount _tasksCount isActive isLock',
        options: {
          limit: 5,
          sort: {
            createdAt: -1
          }
        },
        match: {
          isActive: true,
          isLock: false
        }
      },
      {
        path: '_tasks',
        select: 'name project isActive isLock',
        options: {
          limit: 5,
          sort: {
            createdAt: -1
          }
        },
        match: {
          isActive: true,
          isLock: false
        },
        populate: {
          path: 'project',
          select: 'name',
          match: {
            isActive: true,
            isLock: false
          }
        }
      }
    ])

    res.status(200).json({
      error: false,
      data: UserDTO.Interface(result)
    })
  } catch (error) {
    next(error)
  }
}
