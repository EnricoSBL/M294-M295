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
    private int age;

    @Column(nullable = false)
    private boolean manager;

    public Employee(){
    }
    public Employee(String firstname, String lastname, int age, boolean manager){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.manager = manager;
    }

}
