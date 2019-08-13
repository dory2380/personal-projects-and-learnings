import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const isLoggedIn = this.authService.isLoggedIn.getValue();

    if (isLoggedIn) {
      return true;
    } else {
        this.router.navigate(['/login']);
        return false;
    }
  }

}
