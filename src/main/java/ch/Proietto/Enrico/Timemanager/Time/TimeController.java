package ch.Proietto.Enrico.Timemanager.Time;

import ch.Proietto.Enrico.Timemanager.Project.Project;
import ch.Proietto.Enrico.Timemanager.Project.ProjectService;
import ch.Proietto.Enrico.Timemanager.Time.Time;
import ch.Proietto.Enrico.Timemanager.Time.TimeService;
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
public class TimeController {
    private final TimeService timeService;

    TimeController(TimeService timeService) {
        this.timeService = timeService;
    }

    @GetMapping("api/Time")
    @RolesAllowed(Roles.ReadTime)
    public ResponseEntity<List<Time>> all() {
        List<Time> result = timeService.getTime();
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping("api/Time/{id}")
    @RolesAllowed(Roles.Read)
    public ResponseEntity<Time> one(@PathVariable Long id) {
        Time time = timeService.getTime(id);
        return new ResponseEntity<>(time, HttpStatus.OK);
    }

    @PostMapping("api/Time")
    @RolesAllowed(Roles.Update)
    public ResponseEntity<Time> newTime(@Valid @RequestBody Time time) {
        Time savedTime = timeService.insertTime(time);
        return new ResponseEntity<>(savedTime, HttpStatus.OK);
    }

    @PutMapping("api/Time/{id}")
    @RolesAllowed(Roles.Update)
    public ResponseEntity<Time> updateTime(@Valid @RequestBody Time time, @PathVariable Long id) {
        Time savedTime = timeService.updateTime(time, id);
        return new ResponseEntity<>(savedTime, HttpStatus.OK);
    }

    @DeleteMapping("api/Time/{id}")
    @RolesAllowed(Roles.Admin)
    public void deleteTime(@PathVariable Long id) { timeService.deleteTime(id); }
}
