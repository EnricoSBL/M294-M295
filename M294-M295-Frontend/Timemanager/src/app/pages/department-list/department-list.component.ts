import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AppRoles } from 'src/app/app.roles';
import { Department } from 'src/app/data/department';
import { DepartmentService } from 'src/app/service/department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {

  public departmentDataSource = new MatTableDataSource<Department>()
  public columns = ['name','amountOfEmployees','employees','manager', 'actions']
  public roles = AppRoles

  constructor (
    private service : DepartmentService,
    private router : Router,
    private dialog : MatDialog,
    private snackBar : MatSnackBar
  ) {}

  ngOnInit(): void {
    this.reloadData()
  }

  private reloadData() {
    this.service.getList().subscribe(obj => {
      this.departmentDataSource.data = obj
    })
  }

  async edit (obj:Department) {
    await this.router.navigate(['department', obj.id])
  }

  async add () {
    await this.router.navigate(['department'])
  }

  delete (obj:Department) {
    this.service.delete(obj.id).subscribe({
      next: response => {
      if (response.status === 200) {
        this.reloadData()
      }
    }
    })
  }
}
