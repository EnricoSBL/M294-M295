package ch.Proietto.Enrico.Timemanager.Employee;

import ch.Proietto.Enrico.Timemanager.security.Roles;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.annotation.security.RolesAllowed;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@SecurityRequirement(name = "bearerAuth")
@Validated
public class EmployeeController {
    private final EmployeeService employeeService;
    
    EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping("api/Employee")
    @RolesAllowed(Roles.Read)
    public ResponseEntity<List<Employee>> all() {
        List<Employee> result = employeeService.getEmployees();
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping("api/Employee/{id}")
    @RolesAllowed(Roles.Read)
    public ResponseEntity<Employee> one(@PathVariable Long id) {
        Employee Employee = employeeService.getEmployee(id);
        return new ResponseEntity<>(Employee, HttpStatus.OK);
    }

    @PostMapping("api/Employee")
    @RolesAllowed(Roles.Update)
    public ResponseEntity<Employee> newEmployee(@Valid @RequestBody Employee employee) {
        Employee savedEmployee = employeeService.insertEmployee(employee);
        return new ResponseEntity<>(savedEmployee, HttpStatus.OK);
    }

    @PutMapping("api/Employee/{id}")
    @RolesAllowed(Roles.Update)
    public ResponseEntity<Employee> updateEmployee(@Valid @RequestBody Employee employee, @PathVariable Long id) {
        Employee savedEmployee = employeeService.updateEmployee(employee, id);
        return new ResponseEntity<>(savedEmployee, HttpStatus.OK);
    }

    @DeleteMapping("api/Employee/{id}")
    @RolesAllowed(Roles.Admin)
    public void deleteEmployee(@PathVariable Long id) {
        employeeService.deleteEmployee(id);
    }
}
