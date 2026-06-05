import { Routes } from '@angular/router';
import { UserListResolver } from './resolvers/user-list.resolver';
import { UserDetailResolver } from './resolvers/user-detail.resolver';
import { UsersListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail/user-detail.component';
import { ErrorComponent } from './components/error/error/error.component';
import { LoginComponent } from './components/login/login/login.component';
import { ChatComponent } from './components/chat/chat/chat.component';
import { CounterComponent } from './components/counter/counter.component';

export const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/users',
  //   pathMatch: 'full'
  // },
  {
    path: 'users',
    component: UsersListComponent,
    resolve: {
      users: UserListResolver  // قبل از بارگذاری، داده‌ها را دریافت کن
    }
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'counter',
    component: CounterComponent,
  },
  {
    path: '',
    component: CounterComponent,
  },
  {
    path: 'user/:id',
    component: UserDetailComponent,
    resolve: {
      user: UserDetailResolver  // قبل از بارگذاری، داده‌های کاربر را دریافت کن
    }
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: '**',
    redirectTo: '/users'
  }
];