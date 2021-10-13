
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
    name: string;
}

export interface UpdateEmployeeInput {
    id: string;
    name: string;
}

export interface Department {
    exampleField?: Nullable<number>;
}

export interface IQuery {
    departments(): Nullable<Department>[] | Promise<Nullable<Department>[]>;
    department(id: number): Nullable<Department> | Promise<Nullable<Department>>;
    getEmployees(): Nullable<Nullable<Employee>[]> | Promise<Nullable<Nullable<Employee>[]>>;
    getEmployee(id: string): Nullable<Employee> | Promise<Nullable<Employee>>;
}

export interface IMutation {
    createDepartment(createDepartmentInput: CreateDepartmentInput): Department | Promise<Department>;
    updateDepartment(updateDepartmentInput: UpdateDepartmentInput): Department | Promise<Department>;
    removeDepartment(id: number): Nullable<Department> | Promise<Nullable<Department>>;
    createEmployee(createEmployeeInput: CreateEmployeeInput): Employee | Promise<Employee>;
    updateEmployee(updateEmployeeInput: UpdateEmployeeInput): Employee | Promise<Employee>;
    removeEmployee(id: string): Nullable<Employee> | Promise<Nullable<Employee>>;
}

export interface Employee {
    id: string;
    name: string;
}

type Nullable<T> = T | null;
