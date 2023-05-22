package ch.Proietto.Enrico.Timemanager.Time;

import ch.Proietto.Enrico.Timemanager.Employee.Employee;
import ch.Proietto.Enrico.Timemanager.Project.Project;
import ch.Proietto.Enrico.Timemanager.Project.ProjectRepository;
import ch.Proietto.Enrico.Timemanager.storage.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TimeService {

    private final TimeRepository repository;

    public TimeService(TimeRepository repository){
        this.repository = repository;
    }

    public List<Time> getTime() { return repository.findAll(); }

    public Time getTime(long id) {
        return repository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException( id, Time.class));
    }

    public Time insertTime(Time time) {
        return repository.save(time);
    }

    public Time updateTime(Time time, Long id) {
        return repository.findById(id)
                .map(TimeOG -> {
                    TimeOG.setEmployee(time.getEmployee());
                    TimeOG.setStartTime(time.getStartTime());
                    TimeOG.setEndTime(time.getEndTime());
                    TimeOG.setComment(time.getComment());
                    return repository.save(TimeOG);
                })
                .orElseGet(() -> repository.save(time));
    }

    public void deleteTime(long id) {
        repository.deleteById(id);
    }

}
