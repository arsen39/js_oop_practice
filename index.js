class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  set name(newName) {
    if (typeof newName !== "string") {
      throw new TypeError("Invalid Name");
    }
    this._name = newName;
  }

  get name() {
    return this._name;
  }

  set surname(newSurename) {
    if (typeof newSurename !== "string") {
      throw new TypeError("Invalid Name");
    }
    this._surname = newSurename;
  }

  get name() {
    return this._surname;
  }

  getFullName() {
    return `${this._name} ${this._surname}`;
  }
}

class Student extends User {
  constructor(name, surname, dateOfEntering) {
    super(name, surname);
    this.dateOfEntering = dateOfEntering;
  }

  set dateOfEntering(newDateOfEntering) {
    if (!(newDateOfEntering instanceof Date)) {
      throw new TypeError("Invalid Data");
    }

    if (
      newDateOfEntering > new Date() ||
      newDateOfEntering < new Date().setFullYear(new Date().getFullYear() - 5)
    ) {
      throw new RangeError("Invalid Data");
    }

    this._dateOfEntering = newDateOfEntering;
  }

  get yearOfEntering() {
    return this._dateOfEntering.getFullYear();
  }

  getCourse() {
    return (new Date ().getFullYear() - this._dateOfEntering.getFullYear() + 1);
  }
}
