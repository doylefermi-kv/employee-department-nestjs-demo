import { Resolver, Query, Mutation, Args, ResolveField } from '@nestjs/graphql';
import { EmpDeptService } from 'src/empdept/empdept.service';
import { Employee } from 'src/employees/entities/employee.entity';
import DepartmentEmployeesLoader from 'src/loader/departmentEmployees.loader';
import { DepartmentsService } from './departments.service';
import { CreateDepartmentInput } from './dto/create-department.input';
import { UpdateDepartmentInput } from './dto/update-department.input';

@Resolver('Department')
export class DepartmentsResolver {
  constructor(
    private readonly departmentsService: DepartmentsService,
    private readonly departmentEmployeesLoader: DepartmentEmployeesLoader,
  ) {}

  @Mutation('createDepartment')
  create(
    @Args('createDepartmentInput') createDepartmentInput: CreateDepartmentInput,
  ) {
    return this.departmentsService.create(createDepartmentInput);
  }

  @Query('getDepartments')
  findAll() {
    return this.departmentsService.findAll();
  }

  @Query('getDepartment')
  findOne(@Args('id') id: string) {
    return this.departmentsService.findOne(id);
  }

  @Mutation('updateDepartment')
  update(
    @Args('updateDepartmentInput') updateDepartmentInput: UpdateDepartmentInput,
  ) {
    return this.departmentsService.update(
      updateDepartmentInput.id,
      updateDepartmentInput,
    );
  }

  @Mutation('removeDepartment')
  remove(@Args('id') id: string) {
    return this.departmentsService.remove(id);
  }

  @ResolveField('employees')
  async employees(department) {
    const employeesOfDepartment = await this.departmentEmployeesLoader
      .getEmployeeDepartmentsLoader()
      .load(department.id);

    return employeesOfDepartment;
  }
}
