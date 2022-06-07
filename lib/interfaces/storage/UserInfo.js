const userSchema = require("../../infrastructure/models/Users");

module.exports = class {
  constructor() {
    this.model = userSchema;
  }

  async getInfoUser() {
    return new Promise(async (resolve, reject) => {
      try {
        const us = await this.model.find({});
        resolve(us);
      } catch (error) {
        reject(error);
      }
    });
  }

  async createInfoUser(user) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await this.model.create(user);
        resolve(res);
      } catch (error) {
        reject(error);
      }
    });
  }

  async updateInfoUser() {
    return new Promise(async (resolve, reject) => {
      try {
        const us = await this.model.updateOne()
        resolve(us)
      } catch (error) {
        reject(error)
      }
    })
  }
};
