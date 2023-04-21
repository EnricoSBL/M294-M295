package ch.Proietto.Enrico.Timemanager.Department;

import ch.Proietto.Enrico.Timemanager.Employee.Employee;
import ch.Proietto.Enrico.Timemanager.Employee.EmployeeRepository;
import ch.Proietto.Enrico.Timemanager.storage.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentService {

    private final DepartmentRepository repository;

    public DepartmentService(DepartmentRepository repository){
        this.repository = repository;
    }
    public List<Department> getDepartment() {
        return repository.findAll();
    }

    public Department getDepartment(long id) {
        return repository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException( id, Department.class));
    }

    public Department insertDepartment(Department department) {
        return repository.save(department);
    }

    public Department updateDepartment(Department department, Long id) {
        return repository.findById(id)
                .map(employeeOrig -> {
                    employeeOrig.setName(department.getName());
                    employeeOrig.setAmountOfEmployees(department.getAmountOfEmployees());
                    employeeOrig.setEmployees(department.getEmployees());
                    employeeOrig.setManager(department.getManager());
                    return repository.save(employeeOrig);
                })
                .orElseGet(() -> repository.save(department));
    }

    public void deleteDepartment(long id) {
        repository.deleteById(id);
    }

}
