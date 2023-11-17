import { NgModule } from '@angular/core';

import { LoginPageComponent } from '../pages/login-page/login-page.component';
import SharedModule from '../../shared/modules/shared.module';
import { Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';

const loginRoutes: Routes = [{ path: '', component: LoginPageComponent }];

@NgModule({
  declarations: [LoginPageComponent],
  imports: [CommonModule, SharedModule, AuthRoutingModule],
  exports: [],
})
export class AuthModule {}
