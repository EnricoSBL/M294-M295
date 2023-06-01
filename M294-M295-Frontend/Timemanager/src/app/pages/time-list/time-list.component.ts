import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AppRoles } from 'src/app/app.roles';
import { Time } from 'src/app/data/time';
import { TimeService } from 'src/app/service/time.service';

@Component({
  selector: 'app-time-list',
  templateUrl: './time-list.component.html',
  styleUrls: ['./time-list.component.scss']
})
export class TimeListComponent implements OnInit{

  public timeDataSource = new MatTableDataSource<Time>()
  public columns = ['employee','department','project','startTime','endTime','comment']
  public roles = AppRoles

  constructor (
    private service : TimeService,
    private router : Router,
    private dialog : MatDialog,
    private snackBar : MatSnackBar
  ) {}

  ngOnInit(): void {
    this.reloadData()
  }

  private reloadData() {
    this.service.getList().subscribe(obj => {
      this.timeDataSource.data = obj
    })
  }

  async edit (obj:Time) {
    await this.router.navigate(['time', obj.id])
  }

  async add () {
    await this.router.navigate(['time'])
  }

  delete (obj:Time) {
    this.service.delete(obj.id).subscribe({
      next: response => {
      if (response.status === 200) {
        this.reloadData()
      }
    }
    })
  }

}
