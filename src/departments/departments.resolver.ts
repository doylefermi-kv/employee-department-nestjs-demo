import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DepartmentsService } from './departments.service';
import { CreateDepartmentInput } from './dto/create-department.input';
import { UpdateDepartmentInput } from './dto/update-department.input';

@Resolver('Department')
export class DepartmentsResolver {
  constructor(private readonly departmentsService: DepartmentsService) {}

  @Mutation('createDepartment')
  create(@Args('createDepartmentInput') createDepartmentInput: CreateDepartmentInput) {
    return this.departmentsService.create(createDepartmentInput);
  }

  @Query('departments')
  findAll() {
    return this.departmentsService.findAll();
  }

  @Query('department')
  findOne(@Args('id') id: number) {
    return this.departmentsService.findOne(id);
  }

  @Mutation('updateDepartment')
  update(@Args('updateDepartmentInput') updateDepartmentInput: UpdateDepartmentInput) {
    return this.departmentsService.update(updateDepartmentInput.id, updateDepartmentInput);
  }

  @Mutation('removeDepartment')
  remove(@Args('id') id: number) {
    return this.departmentsService.remove(id);
  }
}
