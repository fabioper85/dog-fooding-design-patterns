import { Employee } from './interfaces';
import { EMPLOYEE_TYPE } from './enums';

class BasicEmployee implements Employee {
  constructor(public name: string, public surname: string) {
    if (name === '' || surname === '') {
      throw new Error('Employee name and surname are required');
    }

    this.name = name;
    this.surname = surname;
  }

  greeting() {
    console.log(
      'Hello, I am ' +
        this.name +
        ' ' +
        this.surname +
        '...a basic employee! Not special at all!!'
    );
  }
}

class AdvancedEmployee implements Employee {
  constructor(public name: string, public surname: string) {
    if (name === '' || surname === '') {
      throw new Error('Employee name and surname are required');
    }

    this.name = name;
    this.surname = surname;
  }

  greeting() {
    console.log(
      'Hello, I am ' +
        this.name.toUpperCase() +
        ' ' +
        this.surname.toUpperCase() +
        '...an ADVANCED employee!!!'
    );
  }
}

export class FactoryObject {
  // protected createEmployee(name: string, surname: string, type: EMPLOYEE_TYPE = EMPLOYEE_TYPE.BASIC) {
  createEmployee(
    name: string,
    surname: string,
    type: EMPLOYEE_TYPE = EMPLOYEE_TYPE.BASIC
  ) {
    let employee: Employee;

    switch (type) {
      case EMPLOYEE_TYPE.BASIC:
      default:
        employee = new BasicEmployee(name, surname);
        break;
      case EMPLOYEE_TYPE.ADVANCED:
        employee = new AdvancedEmployee(name, surname);
        break;
    }

    return employee;
  }

  // Public methods to create defined employees
  /*
  createBasicEmployee(name: string, surname: string): Employee {
    return this.createEmployee(name, surname, EMPLOYEE_TYPE.BASIC);
  }
  createAdvancedEmployee(name: string, surname: string): Employee {
    return this.createEmployee(name, surname, EMPLOYEE_TYPE.ADVANCED);
  }*/
}
