import { Department } from 'src/departments/entities/department.entity';
import { Employee } from 'src/employees/entities/employee.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('emp_dept')
export class EmpDept {
  @PrimaryColumn({ name: 'employee_id' })
  employeeId: string;

  @PrimaryColumn({ name: 'department_id' })
  departmentId: string;

  @ManyToOne(() => Employee, (employee) => employee.departments, {
    primary: true,
  })
  @JoinColumn({ name: 'employee_id' })
  employee: Employee;

  @ManyToOne(() => Department, (department) => department.employees, {
    primary: true,
  })
  @JoinColumn({ name: 'department_id' })
  department: Department;
}
