import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    public authService: AuthService,
    private router:Router,
    public fb: FormBuilder
  ){}

  ngOnInit():void{
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onLogin():void{

    this.authService.Login(this.loginForm?.value)
    .subscribe( (user:any) => {
      console.log(user);
      this.router.navigate(['/product/list']);
    });
  }
}
