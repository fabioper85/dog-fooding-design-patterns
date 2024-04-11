import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FactoryObject } from './classes';
import { EMPLOYEE_TYPE } from './enums';
import { CommonModule } from '@angular/common';
import { Employee } from './interfaces';
import { CreationalPgDescComponent } from '../../shared/creational-pg-desc/creational-pg-desc.component';
import { EXAMPLE_TYPE } from '../../types';
import { ExampleLinkComponent } from '../../shared/example-link/example-link.component';

interface EmployeeTypeOption {
  value: EMPLOYEE_TYPE;
  selected: boolean;
}

@Component({
  selector: 'factory-example',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    CreationalPgDescComponent,
    ExampleLinkComponent,
  ],
  templateUrl: './factory-example.component.html',
  styleUrl: './factory-example.component.css',
})
export class FactoryExampleComponent {
  exampleType: EXAMPLE_TYPE = EXAMPLE_TYPE.FACTORY;
  factory?: FactoryObject;
  employeeTypes = EMPLOYEE_TYPE;
  newEmployeeName: string = '';
  newEmployeeLastname: string = '';
  employees: Employee[] = [];
  employeeTypeOps: EmployeeTypeOption[] = [
    { value: EMPLOYEE_TYPE.BASIC, selected: true },
    { value: EMPLOYEE_TYPE.ADVANCED, selected: false },
  ];
  newEmployeeTypeSelect: EMPLOYEE_TYPE = this.employeeTypeOps.filter(
    (et) => et.selected
  )[0].value;

  createFactory() {
    this.factory = new FactoryObject();
  }

  createEmployee() {
    this.employees.push(
      this.factory!.createEmployee(
        this.newEmployeeName,
        this.newEmployeeLastname,
        this.newEmployeeTypeSelect
      )
    );

    // other way to create objects without employeeType use
    // employeeFactory.createBasicEmployee('John', 'Doe'),
    //employeeFactory.createAdvancedEmployee('Stephany', 'Clarkson')

    this.clearFormData();
  }

  clearFormData() {
    this.newEmployeeName = '';
    this.newEmployeeLastname = '';
    this.newEmployeeTypeSelect = this.employeeTypes.BASIC;
  }
}
