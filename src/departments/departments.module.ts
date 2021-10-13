import { Module } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { DepartmentsResolver } from './departments.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Department } from './entities/department.entity';
import { EmpDeptModule } from 'src/empdept/empdept.module';

@Module({
  imports: [TypeOrmModule.forFeature([Department]), EmpDeptModule],
  providers: [DepartmentsResolver, DepartmentsService],
})
export class DepartmentsModule {}
