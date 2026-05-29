import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: 'error.component.html',
  styleUrls: ['error.component.scss']
})
export class ErrorComponent {
  errorMessage: string = 'مشکلی در بارگذاری داده‌ها به وجود آمده است.';
  
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (params['message']) {
        this.errorMessage = params['message'];
      }
    });
  }
}