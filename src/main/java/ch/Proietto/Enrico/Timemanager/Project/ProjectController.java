package ch.Proietto.Enrico.Timemanager.Project;

import ch.Proietto.Enrico.Timemanager.Employee.Employee;
import ch.Proietto.Enrico.Timemanager.Employee.EmployeeService;
import ch.Proietto.Enrico.Timemanager.security.Roles;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.annotation.security.RolesAllowed;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@SecurityRequirement(name = "bearerAuth")
@Validated
public class ProjectController {
    private final ProjectService projectService;

    ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping("api/Project")
    @RolesAllowed(Roles.Read)
    public ResponseEntity<List<Project>> all() {
        List<Project> result = projectService.getProject();
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping("api/Project/{id}")
    @RolesAllowed(Roles.Read)
    public ResponseEntity<Project> one(@PathVariable Long id) {
        Project project = projectService.getProject(id);
        return new ResponseEntity<>(project, HttpStatus.OK);
    }

    @PostMapping("api/Project")
    @RolesAllowed(Roles.Update)
    public ResponseEntity<Project> newProject(@Valid @RequestBody Project project) {
        Project savedProject = projectService.insertProject(project);
        return new ResponseEntity<>(savedProject, HttpStatus.OK);
    }

    @PutMapping("api/Project/{id}")
    @RolesAllowed(Roles.Update)
    public ResponseEntity<Project> updateProject(@Valid @RequestBody Project project, @PathVariable Long id) {
        Project savedProject = projectService.updateProject(project, id);
        return new ResponseEntity<>(savedProject, HttpStatus.OK);
    }

    @DeleteMapping("api/Project/{id}")
    @RolesAllowed(Roles.Admin)
    public void deleteProject(@PathVariable Long id) { projectService.deleteProject(id); }
}
