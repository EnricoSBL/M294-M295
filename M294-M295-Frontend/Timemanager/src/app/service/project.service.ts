import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";
import { Project } from "../data/project";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private backendUrl = 'Project';

  constructor(private http: HttpClient) { }

  public getList(): Observable<Project[]> {
    return this.http.get<Project[]>(environment.backendBaseUrl + this.backendUrl);
  }
  public getOne(id: number): Observable<Project> {
    return this.http.get<Project>(environment.backendBaseUrl + this.backendUrl + `/${id}`);
  }
  public update(Employee: Project): Observable<Project> {
    return this.http.put<Project>(environment.backendBaseUrl + this.backendUrl + `/${Employee.id}`, Employee);
  }

  public save(Employee: Project): Observable<Project> {
    return this.http.post<Project>(environment.backendBaseUrl + this.backendUrl, Employee);
  }

  public delete(id: number): Observable<HttpResponse<string>> {
    return this.http.delete<string>(environment.backendBaseUrl + this.backendUrl + `/${id}`, {observe: 'response'});
  }
}
