import { HttpClient, HttpResponse } from "@angular/common/http";
import { EmployeeService } from "./employee.service"
import { Employee } from "../data/employee";
import { createSpyFromClass, Spy } from "jasmine-auto-spies";
import { TestBed } from "@angular/core/testing";

describe('EmployeeService', () => {
  let service: EmployeeService;
  let httpSpy: Spy<HttpClient>;

  const testEmployees: Employee[] = [
    {
      id: 1,
      lastname: 'Mustermann',
      firstname: 'Hans',
      age: 29,
      manager: false
    },
    {
      id: 2,
      lastname: 'Helm',
      firstname: 'Willhelm',
      age: 35,
      manager: true,
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: HttpClient, useValue: createSpyFromClass(HttpClient)}
      ]
    });
    service = TestBed.inject(EmployeeService);
    httpSpy = TestBed.inject<any>(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return a list of employees', (done: DoneFn) => {
    httpSpy.get.and.nextWith(testEmployees);

    service.getList().subscribe({
        next:
          employees => {
            expect(employees).toHaveSize(testEmployees.length);
            done();
          },
        error: done.fail
      }
    );
    expect(httpSpy.get.calls.count()).toBe(1);
});
it('should create a new customer', (done: DoneFn) => {

  const newEmployee: Employee = {
    id: 3,
    lastname: 'Müller',
    firstname: 'Max',
    age: 23,
    manager: false
  };

  httpSpy.post.and.nextWith(newEmployee);

  service.save(newEmployee).subscribe({
      next: employee => {
        expect(employee).toEqual(newEmployee);
        done();
      },
      error: done.fail
    }
  );
  expect(httpSpy.post.calls.count()).toBe(1);
});

it('should update an newer employee', (done: DoneFn) => {

  const employee = testEmployees[0];
  employee.lastname = 'Updated Employee';

  httpSpy.put.and.nextWith(employee);

  service.update(employee).subscribe({
    next: neweremployee => {
      expect(neweremployee.lastname).toEqual('Updated Employee');
      done();
    },
    error: done.fail
  });
  expect(httpSpy.put.calls.count()).toBe(1);
});

it('should delete an existing employee', (done: DoneFn) => {

  httpSpy.delete.and.nextWith(new HttpResponse({
    status: 200
  }));

  service.delete(1).subscribe({
    next: response => {
      expect(response.status).toBe(200);
      done();
    },
    error: done.fail
  });
  expect(httpSpy.delete.calls.count()).toBe(1);
});
})
