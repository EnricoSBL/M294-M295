package ch.Proietto.Enrico.Timemanager.Department;

import ch.Proietto.Enrico.Timemanager.Employee.Employee;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.util.List;

@Data
@Entity
public class Department {

    @Id
    @GeneratedValue
    private long id;

    @Column(nullable = false)
    @Size(max = 255)
    @NotEmpty
    private String name;

    @Column(nullable = false)
    private int amountOfEmployees;

    @OneToMany
    @JoinColumn(name = "employee_id")
    private List<Employee> employees;

    @OneToOne
    @JoinColumn(name = "employee_id")
    private Employee manager;

    Department(){
    }
}
