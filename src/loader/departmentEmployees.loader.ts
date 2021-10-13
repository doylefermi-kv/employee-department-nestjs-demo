import { Injectable, Scope } from '@nestjs/common';
import * as DataLoader from 'dataloader';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { EmpDept } from 'src/empdept/entities/empdept.entity';
import { Employee } from 'src/employees/entities/employee.entity';

@Injectable({ scope: Scope.REQUEST })
export default class DepartmentEmployeesLoader {
  departmentEmployeesLoader: DataLoader<string, Employee[]>;

  constructor(
    @InjectRepository(EmpDept) private empDeptRepository: Repository<EmpDept>,
  ) {
    this.departmentEmployeesLoader = new DataLoader<string, Employee[]>(
      this.getEmployeesByDepartmentIds,
    );
  }

  getEmployeesByDepartmentIds = async (departmentIds: string[]) => {
    const departmentEmployees = await this.empDeptRepository.find({
      where: { departmentId: In(departmentIds) },
      relations: ['employee'],
    });

    const departmentEmployeeMap: { [key: string]: Employee[] } = {};

    departmentEmployees.map((departmentEmployee: EmpDept) => {
      if (!departmentEmployeeMap[departmentEmployee.departmentId]) {
        departmentEmployeeMap[departmentEmployee.departmentId] = [];
      }
      departmentEmployeeMap[departmentEmployee.departmentId].push(
        departmentEmployee.employee,
      );
    });
    return departmentIds.map(
      (departmentId) => departmentEmployeeMap[departmentId],
    );
  };

  public getEmployeeDepartmentsLoader(): DataLoader<string, Employee[]> {
    return this.departmentEmployeesLoader;
  }
}
