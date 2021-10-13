import { EmpDept } from 'src/empdept/entities/empdept.entity';
import { Employee } from 'src/schema/graphql.schema';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  public id!: string;

  @Column()
  public name!: string;

  @OneToMany(() => EmpDept, (empDept) => empDept.employeeId)
  employees: Promise<Employee[]>;
}
