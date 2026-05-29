// // import { Component } from '@angular/core';
// // import { CommonModule } from '@angular/common';
// // import { UserProfileComponent } from './components/user-profile/user-profile.component';
// // import { UserListComponent } from './components/user-list/user-list.component';

// // @Component({
// //   selector: 'app-root',
// //   standalone: true,
// //   imports: [CommonModule, UserProfileComponent, UserListComponent],
// //   template: `
// //     <div class="container">
// //       <h1>Angular 19 Component Binding Demo</h1>
      
// //       <!-- One-way binding (Parent to Child) -->
// //       <div class="section">
// //         <h2>1. Input() Binding - Parent to Child</h2>
// //         <app-user-profile 
// //           [userName]="parentUserName"
// //           [userAge]="parentUserAge"
// //           [isActive]="parentUserActive">
// //         </app-user-profile>
        
// //         <div class="controls">
// //           <button (click)="updateUser()">Update User from Parent</button>
// //         </div>
// //       </div>

// //       <!-- Two-way binding with &#64 @Output() -->
// //       <div class="section">
// //         <h2>2. Output() decorator Binding - Child to Parent (Event Emitter)</h2>
// //         <app-user-list 
// //           [users]="users"
// //           (userSelected)="onUserSelected($event)"
// //           (userDeleted)="onUserDeleted($event)">
// //         </app-user-list>
        
// //         <div *ngIf="selectedUser" class="selected-info">
// //           <h3>Selected User from Child:</h3>
// //           <p>{{ selectedUser | json }}</p>
// //         </div>
// //       </div>

// //       <!-- Two-way binding with banana-in-a-box -->
// //       <div class="section">
// //         <h2>3. Two-way Binding [()] - Banana in a Box</h2>
// //         <input type="text" [(ngModel)]="twoWayData" placeholder="Type something...">
// //         <p>You typed: <strong>{{ twoWayData }}</strong></p>
// //         <button (click)="clearTwoWayData()">Clear</button>
// //       </div>

// //       <!-- Model Change Example -->
// //       <div class="section">
// //         <h2>4. Model Change Detection</h2>
// //         <p>Favorite Color: <strong>{{ favoriteColor }}</strong></p>
// //         <input type="text" [(ngModel)]="favoriteColor" placeholder="Enter your favorite color">
// //         <p class="note">* Try changing the color - it updates automatically!</p>
// //       </div>
// //     </div>
// //   `,
// //   styles: [`
// //     .container {
// //       max-width: 1200px;
// //       margin: 0 auto;
// //       padding: 20px;
// //       font-family: Arial, sans-serif;
// //     }
// //     .section {
// //       border: 2px solid #ddd;
// //       border-radius: 8px;
// //       padding: 20px;
// //       margin-bottom: 30px;
// //       background-color: #f9f9f9;
// //     }
// //     h2 {
// //       color: #333;
// //       margin-top: 0;
// //       border-bottom: 2px solid #4CAF50;
// //       padding-bottom: 10px;
// //     }
// //     .controls {
// //       margin-top: 15px;
// //     }
// //     button {
// //       background-color: #4CAF50;
// //       color: white;
// //       padding: 10px 20px;
// //       border: none;
// //       border-radius: 4px;
// //       cursor: pointer;
// //       margin: 5px;
// //     }
// //     button:hover {
// //       background-color: #45a049;
// //     }
// //     input {
// //       padding: 8px;
// //       margin: 10px;
// //       border: 1px solid #ddd;
// //       border-radius: 4px;
// //     }
// //     .selected-info {
// //       margin-top: 15px;
// //       padding: 10px;
// //       background-color: #e3f2fd;
// //       border-radius: 4px;
// //     }
// //     .note {
// //       font-size: 12px;
// //       color: #666;
// //       margin-top: 5px;
// //     }
// //   `]
// // })
// // export class AppComponent {
// //   // For @Input() binding
// //   parentUserName = 'John Doe';
// //   parentUserAge = 25;
// //   parentUserActive = true;

// //   // For @Output() binding
// //   users = [
// //     { id: 1, name: 'Alice Johnson', email: 'alice@example.com', age: 28 },
// //     { id: 2, name: 'Bob Smith', email: 'bob@example.com', age: 32 },
// //     { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', age: 24 }
// //   ];
  
// //   selectedUser: any = null;

// //   // For two-way binding
// //   twoWayData = 'Initial value';
// //   favoriteColor = 'blue';

// //   updateUser() {
// //     this.parentUserName = 'Updated User';
// //     this.parentUserAge = 30;
// //     this.parentUserActive = !this.parentUserActive;
// //   }

// //   onUserSelected(user: any) {
// //     this.selectedUser = user;
// //     console.log('User selected from child:', user);
// //   }

// //   onUserDeleted(userId: number) {
// //     this.users = this.users.filter(user => user.id !== userId);
// //     console.log('User deleted:', userId);
// //   }

// //   clearTwoWayData() {
// //     this.twoWayData = '';
// //   }
// // }
// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { UserFormComponent } from './components/user-form/user-form.component';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule, UserFormComponent],
//   template: `
//     <div class="app-container">
//       <header>
//         <h1>Angular 19 - ControlValueAccessor Demo</h1>
//         <p>Custom Select Dropdowns with Form Integration</p>
//       </header>
      
//       <app-user-form></app-user-form>
      
//       <footer>
//         <h3>Key Features:</h3>
//         <ul>
//           <li>✅ Custom Select Component implementing ControlValueAccessor</li>
//           <li>✅ Full Reactive Forms integration</li>
//           <li>✅ Searchable dropdowns</li>
//           <li>✅ Disabled state support</li>
//           <li>✅ Touch and change events</li>
//           <li>✅ Custom styling and animations</li>
//           <li>✅ Option filtering</li>
//           <li>✅ Form validation</li>
//         </ul>
//       </footer>
//     </div>
//   `,
//   styles: [`
//     .app-container {
//       max-width: 1200px;
//       margin: 0 auto;
//       padding: 20px;
//     }
    
//     header {
//       text-align: center;
//       margin-bottom: 30px;
//       padding-bottom: 20px;
//       border-bottom: 3px solid #4CAF50;
//     }
    
//     h1 {
//       color: #333;
//       margin-bottom: 10px;
//     }
    
//     footer {
//       margin-top: 40px;
//       padding: 20px;
//       background-color: #f9f9f9;
//       border-radius: 8px;
//     }
    
//     footer h3 {
//       color: #4CAF50;
//       margin-top: 0;
//     }
    
//     footer ul {
//       list-style-type: none;
//       padding: 0;
//     }
    
//     footer li {
//       padding: 5px 0;
//       color: #666;
//     }
    
//     @media (max-width: 768px) {
//       .app-container {
//         padding: 10px;
//       }
//     }
//   `]
// })
// export class AppComponent {
//   title = 'angular-binding-demo';
// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  isLoading = false;
  
  constructor(private router: Router) {
    // نمایش وضعیت بارگذاری
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
        setTimeout(() => {
          this.isLoading = false;
        }, 2000);
      }
    });
  }
}