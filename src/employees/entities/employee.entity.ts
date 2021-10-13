import { Department } from 'src/departments/entities/department.entity';
import { EmpDept } from 'src/empdept/entities/empdept.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  public id!: string;

  @Column()
  public name!: string;

  @OneToMany(() => EmpDept, (empDept) => empDept.departmentId)
  departments: Promise<Department[]>;
}
