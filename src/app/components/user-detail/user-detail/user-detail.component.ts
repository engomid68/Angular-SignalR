import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UserData } from '../../../services/user-data.service';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="detail-container" *ngIf="user">
      <h2>👤 جزئیات کاربر</h2>
      <p class="info">✅ داده‌ها قبل از بارگذاری صفحه از Resolver دریافت شده‌اند</p>
      
      <div class="user-detail-card">
        <div class="detail-header">
          <h3>{{ user.name }}</h3>
          <span class="badge" [class.active]="user.isActive">فعال</span>
        </div>
        
        <div class="detail-info">
          <div class="info-row">
            <strong>📧 Email:</strong>
            <span>{{ user.email }}</span>
          </div>
          <div class="info-row">
            <strong>👤 Username:</strong>
            <span>{{ user.username }}</span>
          </div>
          <div class="info-row">
            <strong>📞 Phone:</strong>
            <span>{{ user.phone }}</span>
          </div>
          <div class="info-row">
            <strong>🌐 Website:</strong>
            <span>{{ user.website }}</span>
          </div>
          <div class="info-row">
            <strong>🏢 Company:</strong>
            <span>{{ user.company.name }}</span>
          </div>
          <div class="info-row">
            <strong>📍 Address:</strong>
            <span>{{ user.address.street }}, {{ user.address.city }}</span>
          </div>
        </div>
        
        <div class="resolver-info">
          <h4>ℹ️ اطلاعات Resolver</h4>
          <p>⏱️ زمان دریافت داده: {{ loadTime | date:'HH:mm:ss' }}</p>
          <p>🆔 ID کاربر: {{ user.id }}</p>
          <p>✅ وضعیت: داده با موفقیت قبل از بارگذاری صفحه آماده شد</p>
        </div>
        
        <div class="actions">
          <a routerLink="/users" class="back-link">← بازگشت به لیست کاربران</a>
        </div>
      </div>
    </div>
    
    <div *ngIf="!user" class="loading">
      <div class="spinner"></div>
      <p>Loading user data...</p>
    </div>
  `,
  styles: [`
    .detail-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    
    h2 {
      color: #333;
      margin-bottom: 10px;
    }
    
    .info {
      background: #e3f2fd;
      padding: 10px;
      border-radius: 6px;
      margin-bottom: 20px;
      color: #1976D2;
    }
    
    .user-detail-card {
      background: white;
      border-radius: 12px;
      padding: 25px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    .detail-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      padding-bottom: 15px;
      border-bottom: 2px solid #f0f0f0;
    }
    
    .badge {
      padding: 5px 12px;
      border-radius: 20px;
      background: #f44336;
      color: white;
      font-size: 12px;
    }
    
    .badge.active {
      background: #4CAF50;
    }
    
    .detail-info {
      display: grid;
      gap: 15px;
      margin-bottom: 25px;
    }
    
    .info-row {
      display: flex;
      padding: 8px;
      background: #f9f9f9;
      border-radius: 6px;
    }
    
    .info-row strong {
      width: 120px;
      color: #555;
    }
    
    .resolver-info {
      margin-top: 20px;
      padding: 15px;
      background: #f5f5f5;
      border-radius: 8px;
      border-left: 4px solid #FF9800;
    }
    
    .actions {
      margin-top: 20px;
      text-align: center;
    }
    
    .back-link {
      display: inline-block;
      padding: 10px 20px;
      background: #4CAF50;
      color: white;
      text-decoration: none;
      border-radius: 6px;
      transition: background 0.3s;
    }
    
    .back-link:hover {
      background: #45a049;
    }
    
    .loading {
      text-align: center;
      padding: 50px;
    }
    
    .spinner {
      border: 4px solid #f3f3f3;
      border-top: 4px solid #4CAF50;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      animation: spin 1s linear infinite;
      margin: 0 auto 20px;
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `]
})
export class UserDetailComponent implements OnInit {
  user: UserData | null = null;
  loadTime = new Date();
  
  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    this.user = this.route.snapshot.data['user'];
    console.log('User data from resolver:', this.user);
  }
}