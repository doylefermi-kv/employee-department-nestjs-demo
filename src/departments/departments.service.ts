import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDepartmentInput } from './dto/create-department.input';
import { UpdateDepartmentInput } from './dto/update-department.input';
import { Department } from './entities/department.entity';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectRepository(Department)
    private departmentRepository: Repository<Department>,
  ) {}
  async create(createDepartmentInput: CreateDepartmentInput) {
    const newDepartment = await this.departmentRepository.create(
      createDepartmentInput,
    );
    const createdDepartment: Department = await this.departmentRepository.save(
      newDepartment,
    );

    const savedDepartment = await this.departmentRepository.findOne(
      createdDepartment.id,
    );
    if (savedDepartment) {
      return savedDepartment;
    }
    throw new BadRequestException('Could not create department');
  }

  async findAll() {
    return await this.departmentRepository.find();
  }

  async findOne(id: string) {
    const department = await this.departmentRepository.findOne(id);
    if (department) {
      return department;
    }
    throw new NotFoundException(`Department ${id} does not exist`);
  }

  async update(id: string, updateDepartmentInput: UpdateDepartmentInput) {
    const newDepartment = await this.departmentRepository.create(
      updateDepartmentInput,
    );
    await this.departmentRepository.update(id, newDepartment);
    const updatedDepartment = await this.findOne(id);
    return updatedDepartment;
  }

  async remove(id: string) {
    const department = await this.findOne(id);
    await this.departmentRepository.remove(department);
    return { ...department, id: -1 };
  }
}
