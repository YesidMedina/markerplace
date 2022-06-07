const UserInfo = require('../../interfaces/storage/UserInfo')
const UserRepository = require('../../domain/repository/UserRepository')
const userRepository = new UserRepository(new UserInfo())

module.exports = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await userRepository.updateInfoUser(id)
      resolve(res)
    } catch (error) {
      reject(error)
    }
  })
}
