import { Module } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { DepartmentsResolver } from './departments.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Department } from './entities/department.entity';
import { EmpDeptModule } from 'src/empdept/empdept.module';
import { DataloaderModule } from 'src/loader/dataloader.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Department]),
    EmpDeptModule,
    DataloaderModule,
  ],
  providers: [DepartmentsResolver, DepartmentsService],
})
export class DepartmentsModule {}
