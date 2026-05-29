import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, delay } from 'rxjs/operators';

// user-data.interface.ts
export interface UserData {
  id: number;
  name: string;
  username: string;     // ✓ Exists in API
  email: string;
  address: {            // ✓ Exists in API
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    }
  };
  phone: string;        // ✓ Exists in API
  website: string;      // ✓ Exists in API
  company: {            // ✓ Exists in API
    name: string;
    catchPhrase: string;
    bs: string;
  };
  isActive: boolean;
}

export interface CountryData {
  id: string;
  name: string;
  code: string;
  cities: string[];
}

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  
  constructor(private http: HttpClient) {}
  
  // دریافت لیست کاربران
  getUsers(): Observable<UserData[]> {
    return this.http.get<UserData[]>(this.apiUrl).pipe(
      delay(1500), // شبیه‌سازی تاخیر شبکه
      catchError(error => {
        console.error('Error fetching users:', error);
        throw error;
      })
    );
  }
  
  // دریافت اطلاعات یک کاربر خاص
  getUserById(id: number): Observable<UserData> {
    return this.http.get<UserData>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => {
        console.error(`Error fetching user ${id}:`, error);
        throw error;
      })
    );
  }
  
  // دریافت کشورها (شبیه‌سازی)
  getCountries(): Observable<CountryData[]> {
    // شبیه‌سازی درخواست API
    return of([
      { id: 'us', name: 'United States', code: 'US', cities: ['New York', 'LA', 'Chicago'] },
      { id: 'uk', name: 'United Kingdom', code: 'UK', cities: ['London', 'Manchester', 'Birmingham'] },
      { id: 'de', name: 'Germany', code: 'DE', cities: ['Berlin', 'Munich', 'Hamburg'] },
      { id: 'fr', name: 'France', code: 'FR', cities: ['Paris', 'Lyon', 'Marseille'] },
      { id: 'jp', name: 'Japan', code: 'JP', cities: ['Tokyo', 'Osaka', 'Kyoto'] }
    ]).pipe(
      delay(1000),
      catchError(error => {
        console.error('Error fetching countries:', error);
        throw error;
      })
    );
  }
  
  // اعتبارسنجی توکن (مثال)
  validateToken(token: string): Observable<boolean> {
    // شبیه‌سازی اعتبارسنجی توکن
    return of(token === 'valid-token-123').pipe(
      delay(800),
      map(isValid => isValid),
      catchError(error => {
        console.error('Error validating token:', error);
        return of(false);
      })
    );
  }
}