package ch.Proietto.Enrico.Timemanager.Employee;

import ch.Proietto.Enrico.Timemanager.storage.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class EmployeeService {

    private final EmployeeRepository repository;

    public EmployeeService(EmployeeRepository repository){
        this.repository = repository;
    }

    public List<Employee> getEmployees() {
        return repository.findAll();
    }

    public Employee getEmployee(long id) {
        return repository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException( id, Employee.class));
    }

    public Employee insertEmployee(Employee Employee) {
        return repository.save(Employee);
    }

    public Employee updateEmployee(Employee employee, Long id) {
        return repository.findById(id)
                .map(employeeOrig -> {
                    employeeOrig.setFirstname(employee.getFirstname());
                    employeeOrig.setLastname(employee.getLastname());
                    employeeOrig.setAge(employee.getAge());
                    employeeOrig.setManager(employee.isManager());
                    return repository.save(employeeOrig);
                })
                .orElseGet(() -> repository.save(employee));
    }

    public void deleteEmployee(long id) {
        repository.deleteById(id);
    }

}
