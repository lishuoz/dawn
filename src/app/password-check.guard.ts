import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjectsService } from './projects/shared/projects.service';

@Injectable({
  providedIn: 'root'
})
export class PasswordCheckGuard implements CanActivate {

  constructor(
    private router: Router,
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (localStorage.getItem('token') == 'f671f74b5ccc928dd204e94639a98e3fc90c2b1db43a2ab855f164d6e36583dc') {
      return true;
    } else {
      localStorage.setItem('url', state.url);
      this.router.navigate(['/password'])
      return false;
    }

  }
}
