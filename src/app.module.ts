import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';
import { DepartmentsModule } from './departments/departments.module';
import { AppGraphQLModule } from './graphql/graphql.module';

@Module({
  imports: [EmployeesModule, DepartmentsModule, AppGraphQLModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
