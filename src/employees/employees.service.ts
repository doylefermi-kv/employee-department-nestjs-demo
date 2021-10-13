import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { UpdateEmployeeInput } from './dto/update-employee.input';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  async create(createEmployeeInput: CreateEmployeeInput) {
    const newEmployee = await this.employeeRepository.create(
      createEmployeeInput,
    );
    const createdEmployee: Employee = await this.employeeRepository.save(
      newEmployee,
    );

    const savedEmployee = await this.employeeRepository.findOne(
      createdEmployee.id,
    );
    if (savedEmployee) {
      return savedEmployee;
    }
    throw new BadRequestException('Could not create employee');
  }

  async findAll() {
    return await this.employeeRepository.find();
  }

  async findOne(id: string) {
    const employee = await this.employeeRepository.findOne(id);
    if (employee) {
      return employee;
    }
    throw new NotFoundException(`Employee ${id} does not exist`);
  }

  async update(id: string, updateEmployeeInput: UpdateEmployeeInput) {
    const newEmployee = await this.employeeRepository.create(
      updateEmployeeInput,
    );
    await this.employeeRepository.update(id, newEmployee);
    const updatedEmployee = await this.findOne(id);
    return updatedEmployee;
  }

  async remove(id: string) {
    const user = await this.findOne(id);
    await this.employeeRepository.remove(user);
    return { ...user, id: -1 };
  }
}
