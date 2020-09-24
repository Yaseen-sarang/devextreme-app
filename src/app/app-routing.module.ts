import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { SigninFormComponent } from './shared/components/signin-form/signin-form.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DialogComponent } from './pages/dialog/dialog.component';
import { FormComponent } from './pages/form/form.component';

const routes: Routes = [
  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'signin-form',
    component: SigninFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'dialog',
    component: DialogComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'form',
    component: FormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: '**',
    redirectTo: 'home',
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [CommonModule,BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
