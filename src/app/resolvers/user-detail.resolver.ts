import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserDataService, UserData } from '../services/user-data.service';

@Injectable({
  providedIn: 'root'
})
export class UserDetailResolver implements Resolve<UserData | null> {
  constructor(
    private userService: UserDataService,
    private router: Router
  ) {}
  
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<UserData | null> {
    const userId = Number(route.paramMap.get('id'));
    
    if (isNaN(userId) || userId <= 0) {
      console.error('Invalid user ID:', userId);
      this.router.navigate(['/users'], { 
        queryParams: { error: 'Invalid user ID' }
      });
      return of(null);
    }
    
    return this.userService.getUserById(userId).pipe(
      map(user => {
        if (user && user.id) {
          return user;
        }
        // اگر کاربر یافت نشد
        this.router.navigate(['/not-found']);
        return null;
      }),
      catchError(error => {
        console.error('Error loading user:', error);
        this.router.navigate(['/error'], { 
          queryParams: { message: `Failed to load user with ID ${userId}` }
        });
        return of(null);
      })
    );
  }
}