import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/data/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  employee : Employee = new Employee()

  public employeeForm = new FormGroup({
    id: new FormControl(0),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    age: new FormControl(0),
    manager: new FormControl(false)
  })

  constructor (
    private service : EmployeeService,
    private router: Router,
    private route:ActivatedRoute,
    private formBuilder : FormBuilder,
   ) {}

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id') !== null){
      const id = Number.parseInt(this.route.snapshot.paramMap.get('id') as string)
      this.service.getOne(id).subscribe(obj => {
        this.employee = obj
        this.employeeForm = this.formBuilder.group(this.employee)
      })
    }
  }

  public compareOptions(o1 : any, o2 : any): boolean{
    return o1 && o2 ? o1?.id === o2?.id : o1 === o2;
  }

  async back () {
    await this.router.navigate(['employees'])
  }

  public save(formData: any){
    this.employee = Object.assign(formData)

    if (this.employee.id) {
      this.service.update(this.employee).subscribe({
        next: () => {
          this.back()
        }
      })
      } else{
        this.service.save(this.employee).subscribe({
          next: () => {
            this.back()
          }
      })
    }
  }
}
