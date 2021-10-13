
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreateDepartmentInput {
    name: string;
}

export interface UpdateDepartmentInput {
    id: string;
    name: string;
}

export interface CreateEmployeeInput {
    name: string;
}

export interface UpdateEmployeeInput {
    id: string;
    name: string;
}

export interface Department {
    id: string;
    name: string;
}

export interface IQuery {
    getDepartments(): Nullable<Nullable<Department>[]> | Promise<Nullable<Nullable<Department>[]>>;
    getDepartment(id: string): Nullable<Department> | Promise<Nullable<Department>>;
    getEmployees(): Nullable<Nullable<Employee>[]> | Promise<Nullable<Nullable<Employee>[]>>;
    getEmployee(id: string): Nullable<Employee> | Promise<Nullable<Employee>>;
}

export interface IMutation {
    createDepartment(createDepartmentInput: CreateDepartmentInput): Department | Promise<Department>;
    updateDepartment(updateDepartmentInput: UpdateDepartmentInput): Department | Promise<Department>;
    removeDepartment(id: string): Nullable<Department> | Promise<Nullable<Department>>;
    createEmployee(createEmployeeInput: CreateEmployeeInput): Employee | Promise<Employee>;
    updateEmployee(updateEmployeeInput: UpdateEmployeeInput): Employee | Promise<Employee>;
    removeEmployee(id: string): Nullable<Employee> | Promise<Nullable<Employee>>;
}

export interface Employee {
    id: string;
    name: string;
}

type Nullable<T> = T | null;
