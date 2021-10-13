import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AddEmpDeptInput } from 'src/schema/graphql.schema';
import { EmpDeptService } from './empdept.service';

@Resolver('EmpDept')
export class EmpDeptResolver {
  constructor(private readonly empDeptService: EmpDeptService) {}

  @Mutation('addEmpDept')
  create(@Args('addEmpDeptInput') addEmpDeptInput: AddEmpDeptInput) {
    return this.empDeptService.create(addEmpDeptInput);
  }
}
