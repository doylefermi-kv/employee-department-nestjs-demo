import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EmployeesService } from './employees.service';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { UpdateEmployeeInput } from './dto/update-employee.input';

@Resolver('Employee')
export class EmployeesResolver {
  constructor(private readonly employeesService: EmployeesService) {}

  @Mutation('createEmployee')
  create(
    @Args('createEmployeeInput') createEmployeeInput: CreateEmployeeInput,
  ) {
    return this.employeesService.create(createEmployeeInput);
  }

  @Query('getEmployees')
  findAll() {
    return this.employeesService.findAll();
  }

  @Query('getEmployee')
  findOne(@Args('id') id: string) {
    return this.employeesService.findOne(id);
  }

  @Mutation('updateEmployee')
  update(
    @Args('updateEmployeeInput') updateEmployeeInput: UpdateEmployeeInput,
  ) {
    return this.employeesService.update(
      updateEmployeeInput.id,
      updateEmployeeInput,
    );
  }

  @Mutation('removeEmployee')
  remove(@Args('id') id: string) {
    return this.employeesService.remove(id);
  }
}
