
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreateDepartmentInput {
    exampleField?: Nullable<number>;
}

export interface UpdateDepartmentInput {
    id: number;
}

export interface CreateEmployeeInput {
    exampleField?: Nullable<number>;
}

export interface UpdateEmployeeInput {
    id: number;
}

export interface Department {
    exampleField?: Nullable<number>;
}

export interface IQuery {
    departments(): Nullable<Department>[] | Promise<Nullable<Department>[]>;
    department(id: number): Nullable<Department> | Promise<Nullable<Department>>;
    employees(): Nullable<Employee>[] | Promise<Nullable<Employee>[]>;
    employee(id: number): Nullable<Employee> | Promise<Nullable<Employee>>;
}

export interface IMutation {
    createDepartment(createDepartmentInput: CreateDepartmentInput): Department | Promise<Department>;
    updateDepartment(updateDepartmentInput: UpdateDepartmentInput): Department | Promise<Department>;
    removeDepartment(id: number): Nullable<Department> | Promise<Nullable<Department>>;
    createEmployee(createEmployeeInput: CreateEmployeeInput): Employee | Promise<Employee>;
    updateEmployee(updateEmployeeInput: UpdateEmployeeInput): Employee | Promise<Employee>;
    removeEmployee(id: number): Nullable<Employee> | Promise<Nullable<Employee>>;
}

export interface Employee {
    exampleField?: Nullable<number>;
}

type Nullable<T> = T | null;
