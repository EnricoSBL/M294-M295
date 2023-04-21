package ch.Proietto.Enrico.Timemanager.Project;

import ch.Proietto.Enrico.Timemanager.Employee.Employee;
import ch.Proietto.Enrico.Timemanager.Employee.EmployeeRepository;
import ch.Proietto.Enrico.Timemanager.storage.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ProjectService {

    private final ProjectRepository repository;

    public ProjectService(ProjectRepository repository){
        this.repository = repository;
    }

    public List<Project> getProject() {
        return repository.findAll();
    }

    public Project getProject(long id) {
        return repository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException( id, Project.class));
    }

    public Project insertProject(Project project) {
        return repository.save(project);
    }

    public Project updateProject(Project project, Long id) {
        return repository.findById(id)
                .map(projectOG -> {
                    projectOG.setName(project.getName());
                    return repository.save(projectOG);
                })
                .orElseGet(() -> repository.save(project));
    }

    public void deleteProject(long id) {
        repository.deleteById(id);
    }
}
