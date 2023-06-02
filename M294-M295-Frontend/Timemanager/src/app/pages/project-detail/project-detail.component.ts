import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/data/employee';
import { Project } from 'src/app/data/project';
import { EmployeeService } from 'src/app/service/employee.service';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent implements OnInit{

  project : Project = new Project()
  workers : Employee[] = []
  projectOwner : Employee[] = []

  public projectForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(''),
    description: new FormControl(''),
    workers: new FormControl(),
    projectOwner: new FormControl(),
    dueDate : new FormControl(),
  })

  constructor (
    private service : ProjectService,
    private router : Router,
    private route : ActivatedRoute,
    private formBuilder : FormBuilder,
    private employeeService : EmployeeService,
   ) {}

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id') !== null){
      const id = Number.parseInt(this.route.snapshot.paramMap.get('id') as string)
      this.service.getOne(id).subscribe(obj => {
        this.project = obj
        this.projectForm = this.formBuilder.group(this.project)

        this.projectForm.controls.workers.setValue(this.project.workers)
      })
    }
    this.employeeService.getList().subscribe(obj => {
      this.workers = obj
      this.projectOwner = obj
    })
  }

  public compareOptions(o1 : any, o2 : any): boolean{
    return o1 && o2 ? o1?.id === o2?.id : o1 === o2;
  }

  async back () {
    await this.router.navigate(['projects'])
  }

  public save(formData: any){
    this.project = Object.assign(formData)

    if (this.project.id) {
      this.service.update(this.project).subscribe({
        next: () => {
          this.back()
        }
      })
      } else{
        this.service.save(this.project).subscribe({
          next: () => {
            this.back()
          }
      })
    }
  }
}
