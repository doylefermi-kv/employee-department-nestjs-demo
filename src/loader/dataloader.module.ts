import { Module } from '@nestjs/common';
import EmployeeDepartmentsLoader from 'src/loader/employeeDepartments.loader';
import { EmpDept } from 'src/empdept/entities/empdept.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import DepartmentEmployeesLoader from './departmentEmployees.loader';

@Module({
  imports: [TypeOrmModule.forFeature([EmpDept])],
  providers: [EmployeeDepartmentsLoader, DepartmentEmployeesLoader],
  exports: [EmployeeDepartmentsLoader, DepartmentEmployeesLoader],
})
export class DataloaderModule {}
