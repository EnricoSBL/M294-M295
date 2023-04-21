package ch.Proietto.Enrico.Timemanager.Employee;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.time.LocalTime;

@Data
@Entity
public class Employee {

    @Id
    @GeneratedValue
    private long id;

    @Column(nullable = false)
    @Size(max = 255)
    @NotEmpty
    private String firstname;

    @Column(nullable = false)
    @Size(max = 255)
    @NotEmpty
    private String lastname;



    @Column(nullable = false)
    @NotEmpty
    private LocalTime worktime;

    @Column(nullable = false)
    @NotEmpty
    private boolean manager;

    public Employee(){
    }

}
