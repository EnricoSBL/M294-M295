import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/data/department';
import { Employee } from 'src/app/data/employee';
import { DepartmentService } from 'src/app/service/department.service';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.scss']
})
export class DepartmentDetailComponent implements OnInit{

  department : Department = new Department()
  employees : Employee[] = []
  manager : Employee[] = []

  public departmentForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(''),
    amountOfEmployees: new FormControl(0),
    employees: new FormControl(),
    manager: new FormControl()
  })

  constructor (
    private service : DepartmentService,
    private router: Router,
    private route:ActivatedRoute,
    private formBuilder : FormBuilder,
    private employeeService : EmployeeService,
   ) {}

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id') !== null){
      const id = Number.parseInt(this.route.snapshot.paramMap.get('id') as string)
      this.service.getOne(id).subscribe(obj => {
        this.department = obj
        this.departmentForm = this.formBuilder.group(this.department)

        this.departmentForm.controls.employees.setValue(this.department.employees)
        this.departmentForm.controls.manager.setValue(this.department.manager)
      })
    }
    this.employeeService.getList().subscribe(obj => {
      this.employees = obj
    })
    this.employeeService.getList().subscribe(obj => {
      this.manager = obj
    })
  }

  public compareOptions(o1 : any, o2 : any): boolean{
    return o1 && o2 ? o1?.id === o2?.id : o1 === o2;
  }

  async back () {
    await this.router.navigate(['departments'])
  }

  public save(formData: any){
    this.department = Object.assign(formData)

    if (this.department.id) {
      this.service.update(this.department).subscribe({
        next: () => {
          this.back()
        }
      })
      } else{
        this.service.save(this.department).subscribe({
          next: () => {
            this.back()
          }
      })
    }
  }
}
