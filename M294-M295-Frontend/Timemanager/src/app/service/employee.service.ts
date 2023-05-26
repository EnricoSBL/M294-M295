import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Employee } from "../data/employee";
import { environment } from "../environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private backendUrl = 'Employee';

  constructor(private http: HttpClient) { }

  public getList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(environment.backendBaseUrl + this.backendUrl);
  }
  public getOne(id: number): Observable<Employee> {
    return this.http.get<Employee>(environment.backendBaseUrl + this.backendUrl + `/${id}`);
  }
  public update(Employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(environment.backendBaseUrl + this.backendUrl + `/${Employee.id}`, Employee);
  }

  public save(Employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(environment.backendBaseUrl + this.backendUrl, Employee);
  }

  public delete(id: number): Observable<HttpResponse<string>> {
    return this.http.delete<string>(environment.backendBaseUrl + this.backendUrl + `/${id}`, {observe: 'response'});
  }
}
