import { HttpClient, HttpResponse } from "@angular/common/http";
import { Department } from "../data/department";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private backendUrl = 'Department';

  constructor(private http: HttpClient) { }

  public getList(): Observable<Department[]> {
    return this.http.get<Department[]>(environment.backendBaseUrl + this.backendUrl);
  }
  public getOne(id: number): Observable<Department> {
    return this.http.get<Department>(environment.backendBaseUrl + this.backendUrl + `/${id}`);
  }
  public update(Employee: Department): Observable<Department> {
    return this.http.put<Department>(environment.backendBaseUrl + this.backendUrl + `/${Employee.id}`, Employee);
  }

  public save(Employee: Department): Observable<Department> {
    return this.http.post<Department>(environment.backendBaseUrl + this.backendUrl, Employee);
  }

  public delete(id: number): Observable<HttpResponse<string>> {
    return this.http.delete<string>(environment.backendBaseUrl + this.backendUrl + `/${id}`, {observe: 'response'});
  }
}
