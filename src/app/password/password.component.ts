import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from '../projects/shared/projects.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  password: string
  private answer = 'lishuoz!'
  private url: string;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.url = localStorage.getItem('url')
    if (!this.url) {
      this.router.navigate(['/projects'])
    }
  }

  onSubmit() {
    if (this.password == this.answer) {
      localStorage.setItem('token', 'f671f74b5ccc928dd204e94639a98e3fc90c2b1db43a2ab855f164d6e36583dc')
      this.router.navigate(['/projects/humpday'])
    }else{
      this.password = ''
    }
  }


}
