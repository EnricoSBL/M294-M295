package ch.Proietto.Enrico.Timemanager.Employee;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    //List<Employee> findByOrderByNameAsc();
}
