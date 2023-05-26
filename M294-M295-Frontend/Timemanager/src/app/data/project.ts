import { Employee } from "./employee"

export class Project {
  public id! : number
  public name : string = ''
  public description : string = ''
  public workers : Array<Employee> = []
  public projectOwner : Employee = new Employee()
  public dueTime : Date = new Date()
}
