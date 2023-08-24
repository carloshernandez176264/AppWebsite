import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material/material.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page/layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page/register-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LayoutPageComponent,
    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [],
  providers: [],
})
export class AuthModule { }