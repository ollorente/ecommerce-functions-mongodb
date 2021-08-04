module.exports.Interface = (db) => {
  const { PersonDTO } = require('../person')
  const { MeetingDTO } = require('../meeting')
  const { ProjectDTO } = require('../project')
  const { TaskDTO } = require('../task')

  return {
    id: String(db._id),
    name: db.name ? String(db.name) : '',
    username: db.username ? String(db.username) : '',
    email: db.email ? String(db.email) : '',
    phone: db.phone ? String(db.phone) : '',
    photoURL: db.photoURL ? String(db.photoURL) : '',
    gravatar: db.gravatar ? String(db.gravatar) : '',
    projects: db._projects.map((e) => ProjectDTO.RefInterface(e)),
    projectsCount: Number(db._projectsCount),
    meetings: db._meetings.map((e) => MeetingDTO.RefInterface(e)),
    meetingsCount: Number(db._meetingsCount),
    tasks: db._tasks.map((e) => TaskDTO.RefInterface(e)),
    tasksCount: Number(db._tasksCount),
    people: db._people.map((e) => PersonDTO.RefInterface(e)),
    peopleCount: Number(db._peopleCount),
    isActive: Boolean(db.isActive),
    isLock: Boolean(db.isLock),
    createdAt: db.createdAt,
    updatedAt: db.updatedAt
  }
}

module.exports.RefInterface = (db) => {
  return {
    id: String(db._id),
    name: db.name ? String(db.name) : '',
    username: db.username ? String(db.username) : '',
    photoURL: db.photoURL ? String(db.photoURL) : '',
    gravatar: db.gravatar ? String(db.gravatar) : '',
    isActive: Boolean(db.isActive),
    isLock: Boolean(db.isLock)
  }
}
