module.exports = class {
  constructor(repository) {
    this.repository = repository;
  }

  getInfoUser() {
    return this.repository.getInfoUser();
  }

  createInfoUser(user) {
    return this.repository.createInfoUser(user);
  }

  updateInfoUser() {
    return this.repository.updateInfoUser();
  }
};
