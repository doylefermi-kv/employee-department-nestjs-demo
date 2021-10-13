import { CreateEmployeeInput } from './create-employee.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateEmployeeInput extends PartialType(CreateEmployeeInput) {
  id: number;
}
