import { Component } from '@angular/core';
import { AppAuthService } from 'src/app/service/app.auth.service';

@Component({
  selector: 'app-noaccess',
  templateUrl: './noaccess.component.html',
  styleUrls: ['./noaccess.component.scss']
})
export class NoaccessComponent {
  constructor (
    public authService : AppAuthService
  ) {}
}
