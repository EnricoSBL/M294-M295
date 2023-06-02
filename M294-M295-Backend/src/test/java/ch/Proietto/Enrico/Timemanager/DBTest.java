package ch.Proietto.Enrico.Timemanager;

import ch.Proietto.Enrico.Timemanager.Employee.Employee;
import ch.Proietto.Enrico.Timemanager.Employee.EmployeeRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

@DataJpaTest()
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback()
class DBTest {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Test
    void insertVehicle() {
        Employee employee = this.employeeRepository.save(new Employee("Enrico", "Proietto", 19, true));
        Assertions.assertNotNull(employee.getId());
    }

}
