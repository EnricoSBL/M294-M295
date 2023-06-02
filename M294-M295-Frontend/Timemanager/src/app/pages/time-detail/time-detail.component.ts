import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/data/department';
import { Employee } from 'src/app/data/employee';
import { Time } from 'src/app/data/time';
import { DepartmentService } from 'src/app/service/department.service';
import { EmployeeService } from 'src/app/service/employee.service';
import { ProjectService } from 'src/app/service/project.service';
import { TimeService } from 'src/app/service/time.service';

@Component({
  selector: 'app-time-detail',
  templateUrl: './time-detail.component.html',
  styleUrls: ['./time-detail.component.scss']
})
export class TimeDetailComponent implements OnInit {

  time : Time = new Time()
  employee : Employee[] = []
  department : Department[] = []
  projects : Array<any> = []

  public timeForm = new FormGroup({
    id: new FormControl(0),
    employee: new FormControl(),
    department: new FormControl(),
    projects: new FormControl(),
    startTime: new FormControl(),
    endTime: new FormControl(),
    comment: new FormControl(),
  })

  constructor (
    private service : TimeService,
    private router: Router,
    private route:ActivatedRoute,
    private formBuilder : FormBuilder,
    private employeeService : EmployeeService,
    private departmentService : DepartmentService,
    private projectService : ProjectService,
   ) {}

   ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id') !== null){
      const id = Number.parseInt(this.route.snapshot.paramMap.get('id') as string)
      this.service.getOne(id).subscribe(obj => {
        this.time = obj
        this.timeForm = this.formBuilder.group(this.time)

        this.timeForm.controls.employee.setValue(this.time.employee)
        this.timeForm.controls.department.setValue(this.time.department)
        this.timeForm.controls.projects.setValue(this.time.projects)
      })
    }
    this.employeeService.getList().subscribe(obj => {
      this.employee = obj
    })
    this.departmentService.getList().subscribe(obj => {
      this.department = obj
    })
    this.projectService.getList().subscribe(obj => {
      this.projects = []
      for (const item of obj) {
        this.projects.push({id: item.id, name: item.name})
      }
    })
  }

  public compareOptions(o1 : any, o2 : any): boolean{
    return o1 && o2 ? o1?.id === o2?.id : o1 === o2;
  }

  async back () {
    await this.router.navigate(['times'])
  }

  public save(formData: any){
    this.time = Object.assign(formData)

    if (this.time.id) {
      this.service.update(this.time).subscribe({
        next: () => {
          this.back()
        }
      })
      } else{
        this.service.save(this.time).subscribe({
          next: () => {
            this.back()
          }
      })
    }
  }
}
