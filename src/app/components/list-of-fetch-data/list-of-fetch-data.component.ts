import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FetchService } from '../../services/fetch-service.service';

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-list-of-fetch-data',
  imports: [],
  templateUrl: './list-of-fetch-data.component.html',
  styleUrl: './list-of-fetch-data.component.scss'
})
export class ListOfFetchDataComponent {
users$!: Observable<User[]>;

  constructor(private fetchService: FetchService) {}

  ngOnInit() {
    // Assign observable directly to use with async pipe
    this.users$ = this.fetchService.getData<User[]>('users');

    // Or subscribe manually
    this.fetchService.getData<User[]>('users').subscribe({
      next: (users) => console.log(users),
      error: (err) => console.error('Error:', err),
      complete: () => console.log('Request completed')
    });

    // POST example
    const newUser = { name: 'John', email: 'john@example.com' };
    this.fetchService.postData<User>('users', newUser).subscribe({
      next: (user) => console.log('Created:', user),
      error: (err) => console.error(err)
    });
  }
}
