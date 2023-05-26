import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AppRoles } from 'src/app/app.roles';
import { Employee } from 'src/app/data/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  public employeeDataSource = new MatTableDataSource<Employee>()
  public columns = ['firstname','lastname','age','manager']
  public roles = AppRoles

  constructor (
    private service : EmployeeService,
    private router : Router,
    private dialog : MatDialog,
    private snackBar : MatSnackBar
  ) {}

  ngOnInit(): void {
    this.reloadData()
  }

  private reloadData() {
    this.service.getList().subscribe(obj => {
      this.employeeDataSource.data = obj
    })
  }

  async edit (obj:Employee) {
    await this.router.navigate(['game', obj.id])
  }

  async add () {
    await this.router.navigate(['game'])
  }

  delete (obj:Employee) {
    this.service.delete(obj.id).subscribe({
      next: response => {
      if (response.status === 200) {
        this.reloadData()
      }
    }
    })
  }

}
