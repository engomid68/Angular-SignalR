import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Using Angular 19 signals for reactive state
  private usersSignal = signal([
    { id: 1, name: 'Signal User 1', role: 'Admin' },
    { id: 2, name: 'Signal User 2', role: 'Editor' },
    { id: 3, name: 'Signal User 3', role: 'Viewer' }
  ]);

  // Computed signal for derived state
  readonly users = this.usersSignal.asReadonly();
  readonly userCount = computed(() => this.users().length);
  readonly adminCount = computed(() => this.users().filter(u => u.role === 'Admin').length);

  addUser(name: string, role: string) {
    const newUser = {
      id: this.users().length + 1,
      name,
      role
    };
    this.usersSignal.update(users => [...users, newUser]);
  }

  updateUserRole(id: number, newRole: string) {
    this.usersSignal.update(users =>
      users.map(user =>
        user.id === id ? { ...user, role: newRole } : user
      )
    );
  }
}