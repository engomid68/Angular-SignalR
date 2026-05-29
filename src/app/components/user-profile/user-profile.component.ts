import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="user-profile" [ngClass]="{'active': isActive}">
      <h3>User Profile Component (Child)</h3>
      <div class="user-info">
        <p><strong>Name:</strong> {{ userName }}</p>
        <p><strong>Age:</strong> {{ userAge }}</p>
        <p><strong>Status:</strong> 
          <span [ngStyle]="{'color': isActive ? 'green' : 'red'}">
            {{ isActive ? 'Active' : 'Inactive' }}
          </span>
        </p>
        <p><strong>Data Source:</strong> Received from Parent via Input()</p>
      </div>
    </div>
  `,
  styles: [`
    .user-profile {
      border: 1px solid #4CAF50;
      border-radius: 8px;
      padding: 15px;
      margin: 10px 0;
      background-color: white;
      transition: all 0.3s ease;
    }
    .user-profile.active {
      border-left: 5px solid #4CAF50;
      background-color: #f0f8ff;
    }
    h3 {
      margin-top: 0;
      color: #4CAF50;
    }
    .user-info p {
      margin: 8px 0;
    }
  `]
})
export class UserProfileComponent implements OnChanges {
  @Input() userName: string = 'Default User';
  @Input() userAge: number = 0;
  @Input() isActive: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    // Detect changes in input properties
    if (changes['userName']) {
      console.log('Name changed from', changes['userName'].previousValue, 'to', changes['userName'].currentValue);
    }
    if (changes['userAge']) {
      console.log('Age changed from', changes['userAge'].previousValue, 'to', changes['userAge'].currentValue);
    }
  }
}