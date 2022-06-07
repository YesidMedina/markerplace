const {
    GetInfoUser,
    CreateInfoUser,
    UpdateInfoUser,
  } = require('../../application/use_cases')
  
  module.exports = {
    async getInfoUser(req, res, next) {
      try {
        const resp = await GetInfoUser()
        next(resp)
  
        res.status(200).json(resp)
      } catch (error) {
        next(error)
      }
    },
  
    async createInfoUser(req, res, next) {
      try {
        const server = req.body
        const resp = await CreateInfoUser(server)
        next(resp)
  
        res.json({ msg: 'Usuario creado correctamente' })
      } catch (error) {
        next(error)
      }
    },

    async updateInfoUser(req, res, next) {
        try {
          const {idUsers} = req.headers
          const idUser = await UpdateInfoUser(id)
          next(idUser)
    
          res.json({ msg: 'Usuario editado correctamente' })
        } catch (error) {
          next(error)
        }
      },
}