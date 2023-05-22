package ch.Proietto.Enrico.Timemanager.Project;

import ch.Proietto.Enrico.Timemanager.Employee.Employee;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
@Entity
public class Project {

    @Id
    @GeneratedValue
    private long id;

    @Column(nullable = false)
    @Size(max = 255)
    @NotEmpty
    private String name;

    @Column(nullable = false)
    @Size(max = 255)
    @NotEmpty
    private String description;

    @ManyToMany
    @JoinColumn(name = "employee_id")
    private List<Employee> workers;

    @OneToOne
    @JoinColumn(name = "employee_id")
    private Employee projectOwner;

    @Column(nullable = false)
    private Date dueDate;
}
