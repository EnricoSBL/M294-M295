import { Department } from "./department"
import { Employee } from "./employee"
import { Project } from "./project"

export class Time {
  public id! : number
  public employee : Employee = new Employee
  public department : Department = new Department
  public projects : Project[] = []
  public startTime : Date = new Date()
  public endTime : Date = new Date()
  public comment  = ''
}
