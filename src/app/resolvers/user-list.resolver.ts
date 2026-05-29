import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserDataService, UserData } from '../services/user-data.service';

@Injectable({
  providedIn: 'root'
})
export class UserListResolver implements Resolve<UserData[] | null> {
  constructor(
    private userService: UserDataService,
    private router: Router
  ) {}
  
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<UserData[] | null> {
    return this.userService.getUsers().pipe(
      map(users => {
        if (users && users.length > 0) {
          return users;
        }
        // اگر داده‌ای نبود، به صفحه خطا هدایت کن
        this.router.navigate(['/error'], { 
          queryParams: { message: 'No users found' }
        });
        return null;
      }),
      catchError(error => {
        console.error('Resolver error:', error);
        // در صورت خطا، به صفحه خطا هدایت کن
        this.router.navigate(['/error'], { 
          queryParams: { message: 'Failed to load users data' }
        });
        return of(null);
      })
    );
  }
}