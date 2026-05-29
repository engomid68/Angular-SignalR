import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { UserDataService } from '../services/user-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardResolver implements Resolve<boolean> {
  constructor(
    private userService: UserDataService,
    private router: Router
  ) {}
  
  resolve(): Observable<boolean> {
    const token = localStorage.getItem('auth_token') || '';
    
    return this.userService.validateToken(token).pipe(
      map(isValid => {
        if (isValid) {
          return true;
        }
        // اگر توکن معتبر نبود، به لاگین هدایت کن
        this.router.navigate(['/login'], {
          queryParams: { returnUrl: this.router.url }
        });
        return false;
      }),
      catchError(() => {
        this.router.navigate(['/login']);
        return of(false);
      })
    );
  }
}