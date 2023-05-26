import { Department } from "./department"
import { Employee } from "./employee"
import { Project } from "./project"

export class Time {
  public id! : number
  public employee : Array<Employee> = []
  public department : Array<Department> = []
  public projects : Array<Project> = []
  public startTime : Date = new Date()
  public endTime : Date = new Date()
  public comment : string = ''
}
