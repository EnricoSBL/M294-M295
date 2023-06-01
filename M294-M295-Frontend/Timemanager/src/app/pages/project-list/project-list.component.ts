import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AppRoles } from 'src/app/app.roles';
import { Project } from 'src/app/data/project';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit{
  public projectDataSource = new MatTableDataSource<Project>()
  public columns = ['name','description','dueDate','project_Owner','workers','actions']
  public roles = AppRoles

  constructor (
    private service : ProjectService,
    private router : Router,
    private dialog : MatDialog,
    private snackBar : MatSnackBar
  ) {}

  ngOnInit(): void {
    this.reloadData()
  }

  private reloadData() {
    this.service.getList().subscribe(obj => {
      this.projectDataSource.data = obj
    })
  }

  async edit (obj:Project) {
    await this.router.navigate(['project', obj.id])
  }

  async add () {
    await this.router.navigate(['project'])
  }

  delete (obj:Project) {
    this.service.delete(obj.id).subscribe({
      next: response => {
      if (response.status === 200) {
        this.reloadData()
      }
    }
    })
  }
}
