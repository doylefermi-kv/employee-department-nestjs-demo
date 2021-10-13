import { Injectable, Scope } from '@nestjs/common';
import * as DataLoader from 'dataloader';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Department } from 'src/departments/entities/department.entity';
import { EmpDept } from 'src/empdept/entities/empdept.entity';

@Injectable({ scope: Scope.REQUEST })
export default class EmployeeDepartmentsLoader {
  employeeDepartmentsLoader: DataLoader<string, Department[]>;

  constructor(
    @InjectRepository(EmpDept) private empDeptRepository: Repository<EmpDept>,
  ) {
    this.employeeDepartmentsLoader = new DataLoader<string, Department[]>(
      this.getDepartmentsByEmployeeIds,
    );
  }

  getDepartmentsByEmployeeIds = async (employeeIds: string[]) => {
    const employeeDepartments = await this.empDeptRepository.find({
      where: { employeeId: In(employeeIds) },
      relations: ['department'],
    });

    const employeeDepartmentMap: { [key: string]: Department[] } = {};

    employeeDepartments.map((departmentEmployee: EmpDept) => {
      if (!employeeDepartmentMap[departmentEmployee.employeeId]) {
        employeeDepartmentMap[departmentEmployee.employeeId] = [];
      }
      employeeDepartmentMap[departmentEmployee.employeeId].push(
        departmentEmployee.department,
      );
    });
    return employeeIds.map((employeeId) => employeeDepartmentMap[employeeId]);
  };

  public getEmployeeDepartmentsLoader(): DataLoader<string, Department[]> {
    return this.employeeDepartmentsLoader;
  }
}
