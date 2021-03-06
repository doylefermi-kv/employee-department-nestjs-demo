import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';
import { DepartmentsModule } from './departments/departments.module';
import { AppGraphQLModule } from './graphql/graphql.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { EmpDeptModule } from './empdept/empdept.module';
import { DataloaderModule } from './loader/dataloader.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        PORT: Joi.number(),
      }),
    }),
    EmployeesModule,
    DepartmentsModule,
    EmpDeptModule,
    AppGraphQLModule,
    DatabaseModule,
    DataloaderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
