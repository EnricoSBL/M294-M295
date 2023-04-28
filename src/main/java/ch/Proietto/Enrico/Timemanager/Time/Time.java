package ch.Proietto.Enrico.Timemanager.Time;

import ch.Proietto.Enrico.Timemanager.Department.Department;
import ch.Proietto.Enrico.Timemanager.Employee.Employee;
import ch.Proietto.Enrico.Timemanager.Project.Project;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
@Entity
public class Time {

    @Id
    @GeneratedValue
    private long id;

    @ManyToMany
    @JoinColumn(name = "employee_id")
    private List<Employee> employee;

    @ManyToMany
    @JoinColumn(name = "department_id")
    private List<Department> department;

    @ManyToMany
    @JoinColumn(name = "project_id")
    private List<Project> project;

    @Column(nullable = false)
    private Date startTime;

    @Column
    private Date endTime;

    @Column
    private String comment;

}
