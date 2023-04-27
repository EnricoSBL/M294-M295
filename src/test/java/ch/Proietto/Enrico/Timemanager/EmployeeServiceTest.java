package ch.Proietto.Enrico.Timemanager;

import ch.Proietto.Enrico.Timemanager.Employee.Employee;
import ch.Proietto.Enrico.Timemanager.Employee.EmployeeRepository;
import ch.Proietto.Enrico.Timemanager.Employee.EmployeeService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;

import java.util.Optional;

import static org.mockito.Mockito.*;

class EmployeeServiceTest {

    private EmployeeService employeeService;
    private final EmployeeRepository employeeRepositoryMock = mock(EmployeeRepository.class);

    private final Employee employeeMock = mock(Employee.class);

    @BeforeEach
    void setUp() { employeeService = new EmployeeService(employeeRepositoryMock); }

    @Test
    void createEmployee(){
        when(employeeRepositoryMock.save(employeeMock)).thenReturn(employeeMock);
        employeeService.insertEmployee(employeeMock);
        verify(employeeRepositoryMock, times(1)).save(any());
    }

    @Test
    void findEmployee(){
        when(employeeRepositoryMock.findById(any())).thenReturn(Optional.ofNullable(employeeMock));
        Employee employee = employeeService.getEmployee(any());
        verify(employeeRepositoryMock, times(1)).findById(any());
    }

    @Test
    void deleteEmployee(){
        employeeService.deleteEmployee(any());
        verify(employeeRepositoryMock, times(1)).deleteById(any());
    }
}
