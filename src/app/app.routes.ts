import { Routes } from '@angular/router';
import { BlogsComponent } from './components/blogs/blogs.component';
import { LoginComponent } from './components/login/login.component';
import { AuthUserLoggedGuard } from './guards/auth-user-logged.guard';
import { AuthUserNotLoggedGuard } from './guards/auth-user-not-logged.guard';

export const routes: Routes = [
  {
    path: 'blogs',
    component: BlogsComponent,
    canActivate: [AuthUserLoggedGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthUserNotLoggedGuard],
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];
