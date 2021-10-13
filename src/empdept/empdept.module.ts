import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpDeptResolver } from './empdept.resolver';
import { EmpDeptService } from './empdept.service';
import { EmpDept } from './entities/empdept.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmpDept])],
  providers: [EmpDeptResolver, EmpDeptService],
  exports: [EmpDeptService],
})
export class EmpDeptModule {}
