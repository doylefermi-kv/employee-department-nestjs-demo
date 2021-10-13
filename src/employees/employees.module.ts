import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesResolver } from './employees.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { EmpDeptModule } from 'src/empdept/empdept.module';

@Module({
  imports: [TypeOrmModule.forFeature([Employee]), EmpDeptModule],
  providers: [EmployeesResolver, EmployeesService],
})
export class EmployeesModule {}
