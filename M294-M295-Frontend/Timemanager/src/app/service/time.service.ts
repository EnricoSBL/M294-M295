import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";
import { Time } from "../data/time";

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  private backendUrl = 'Project';

  constructor(private http: HttpClient) { }

  public getList(): Observable<Time[]> {
    return this.http.get<Time[]>(environment.backendBaseUrl + this.backendUrl);
  }
  public getOne(id: number): Observable<Time> {
    return this.http.get<Time>(environment.backendBaseUrl + this.backendUrl + `/${id}`);
  }
  public update(Employee: Time): Observable<Time> {
    return this.http.put<Time>(environment.backendBaseUrl + this.backendUrl + `/${Employee.id}`, Employee);
  }

  public save(Employee: Time): Observable<Time> {
    return this.http.post<Time>(environment.backendBaseUrl + this.backendUrl, Employee);
  }

  public delete(id: number): Observable<HttpResponse<string>> {
    return this.http.delete<string>(environment.backendBaseUrl + this.backendUrl + `/${id}`, {observe: 'response'});
  }
}
