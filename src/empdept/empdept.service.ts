import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddEmpDeptInput } from 'src/schema/graphql.schema';
import { Repository } from 'typeorm';
import { EmpDept } from './entities/empdept.entity';

@Injectable()
export class EmpDeptService {
  constructor(
    @InjectRepository(EmpDept) private empDeptRepository: Repository<EmpDept>,
  ) {}

  async create(addEmpDeptInput: AddEmpDeptInput): Promise<EmpDept> {
    const newEmpDept = await this.empDeptRepository.create(addEmpDeptInput);
    const createdEmpDept: EmpDept = await this.empDeptRepository.save(
      newEmpDept,
    );

    const savedEmpDept = await this.empDeptRepository.find({
      where: {
        departmentId: createdEmpDept.departmentId,
        employeeId: createdEmpDept.employeeId,
      },
    });
    if (savedEmpDept[0]) {
      return savedEmpDept[0];
    }
    throw new BadRequestException('Could not add empDept');
  }

  async getEmployees(departmentId): Promise<EmpDept[]> {
    const employeesOfDepartment = await this.empDeptRepository.find({
      where: { departmentId },
      relations: ['employee'],
    });
    return employeesOfDepartment;
  }

  async getDepartments(employeeId): Promise<EmpDept[]> {
    const departmentsOfEmployee = await this.empDeptRepository.find({
      where: { employeeId },
      relations: ['department'],
    });
    return departmentsOfEmployee;
  }
}
