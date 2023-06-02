import { Employee } from "./employee"

export class Department {
  public id! : number
  public name  = ''
  public amountOfEmployees! : number
  public employees : Array<Employee> = []
  public manager : Employee = new Employee()
}
