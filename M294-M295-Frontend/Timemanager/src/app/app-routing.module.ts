import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppAuthGuard } from './guard/app.auth.guard';
import { AppRoles } from './app.roles';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { NoaccessComponent } from './pages/noaccess/noaccess.component';
import { EmployeeDetailComponent } from './pages/employee-detail/employee-detail.component';
import { DepartmentListComponent } from './pages/department-list/department-list.component';
import { DepartmentDetailComponent } from './pages/department-detail/department-detail.component';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import { TimeListComponent } from './pages/time-list/time-list.component';
import { TimeDetailComponent } from './pages/time-detail/time-detail.component';

const routes: Routes = [
  {
    path: 'employees',
    component: EmployeeListComponent,
    canActivate: [AppAuthGuard],
    data: {
      roles: [
        AppRoles.Read
      ],
        pagetitel: 'Employee'
    }
  },
  {
    path: 'employee/:id',
    pathMatch: 'full',
    component: EmployeeDetailComponent,
    canActivate: [AppAuthGuard],
   data: {
      roles: [
        AppRoles.Update
      ],
      pagetitel: 'Employee edit'
    }
  },
  {
    path: 'employee',
    pathMatch: 'full',
    component: EmployeeDetailComponent,
    canActivate: [AppAuthGuard],
    data: {
      roles: [
        AppRoles.Admin
      ],
      pagetitel: 'New employee'
    }
  },
  {
    path: 'departments',
    component: DepartmentListComponent,
    canActivate: [AppAuthGuard],
    data: {
      roles: [
        AppRoles.Read
      ],
        pagetitel: 'Employee'
    }
  },
  {
    path: 'department/:id',
    pathMatch: 'full',
    component: DepartmentDetailComponent,
    canActivate: [AppAuthGuard],
   data: {
      roles: [
        AppRoles.Update
      ],
      pagetitel: 'Employee edit'
    }
  },
  {
    path: 'department',
    pathMatch: 'full',
    component: DepartmentDetailComponent,
    canActivate: [AppAuthGuard],
    data: {
      roles: [
        AppRoles.Admin
      ],
      pagetitel: 'New employee'
    }
  },
  {
    path: 'projects',
    component: ProjectListComponent,
    canActivate: [AppAuthGuard],
    data: {
      roles: [
        AppRoles.Read
      ],
        pagetitel: 'Employee'
    }
  },
  {
    path: 'project/:id',
    pathMatch: 'full',
    component: ProjectDetailComponent,
    canActivate: [AppAuthGuard],
   data: {
      roles: [
        AppRoles.Update
      ],
      pagetitel: 'Employee edit'
    }
  },
  {
    path: 'project',
    pathMatch: 'full',
    component: ProjectDetailComponent,
    canActivate: [AppAuthGuard],
    data: {
      roles: [
        AppRoles.Admin
      ],
      pagetitel: 'New employee'
    }
  },
  {
    path: 'times',
    component: TimeListComponent,
    canActivate: [AppAuthGuard],
    data: {
      roles: [
        AppRoles.Read
      ],
        pagetitel: 'Employee'
    }
  },
  {
    path: 'time/:id',
    pathMatch: 'full',
    component: TimeDetailComponent,
    canActivate: [AppAuthGuard],
   data: {
      roles: [
        AppRoles.Update
      ],
      pagetitel: 'Employee edit'
    }
  },
  {
    path: 'time',
    pathMatch: 'full',
    component: TimeDetailComponent,
    canActivate: [AppAuthGuard],
    data: {
      roles: [
        AppRoles.Admin
      ],
      pagetitel: 'New employee'
    }
  },
  {
    path: 'noaccess',
    component: NoaccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
