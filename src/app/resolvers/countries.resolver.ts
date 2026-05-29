import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserDataService, CountryData } from '../services/user-data.service';

@Injectable({
  providedIn: 'root'
})
export class CountriesResolver implements Resolve<CountryData[] | null> {
  constructor(
    private userService: UserDataService,
    private router: Router
  ) {}
  
  resolve(): Observable<CountryData[] | null> {
    return this.userService.getCountries().pipe(
      catchError(error => {
        console.error('Error loading countries:', error);
        this.router.navigate(['/error'], { 
          queryParams: { message: 'Failed to load countries data' }
        });
        return of(null);
      })
    );
  }
}