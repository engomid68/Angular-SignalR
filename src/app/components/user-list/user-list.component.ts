import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UserData } from '../../services/user-data.service';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: 'user-list.component.html',
  styleUrls: ['user-list.component.scss']
})
export class UsersListComponent implements OnInit {
  private route = inject(ActivatedRoute);
  
  users: UserData[] = [];
  loadTime = new Date();
  
  ngOnInit() {
    this.users = this.route.snapshot.data['users'];
  }
}