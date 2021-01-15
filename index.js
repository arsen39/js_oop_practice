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
  constructor(name, surname, yearOfEntering) {
    super(name, surname);
    this.dateOfEntering = yearOfEntering;
  }

  set dateOfEntering(newYearOfEntering) {
    if (typeof newYearOfEntering !== "number") {
      throw new TypeError("Invalid Year");
    }

    if (
      newYearOfEntering <
        new Date ().getFullYear () - MAX_NUMBER_OF_YEARS_OF_EDUCATION ||
      newYearOfEntering > new Date ().getFullYear()
    ) {
      throw new RangeError("Invalid Year");
    }

    this._dateOfEntering = new Date(newYearOfEntering, 9, 1);
  }

  get yearOfEntering() {
    return this._dateOfEntering.getFullYear();
  }

  getCourse() {
    return new Date ().getFullYear () - this._dateOfEntering.getFullYear();
  }
}
