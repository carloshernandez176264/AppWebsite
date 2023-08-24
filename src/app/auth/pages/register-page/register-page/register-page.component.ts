import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/interfaces/user.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  registerForm!: FormGroup;
  user!: User;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required],
      identification: ['',Validators.required],
  });
  }

  onRegister():void{
    this.authService.registerUser(this.registerForm?.value)
    .subscribe( (user:any) => {
      console.log(user);
      this.router.navigate(['/auth/login']);
      this.registerForm.reset();
    },
    error => {console.log(error)}
    )
  }

  registerValidate():boolean{
    if(this.registerForm.invalid){
      return true;
    }else{
      return false;
    }
  }

  validatedCamps(campRegister:string, validatedCamp: string):boolean{
    if(this.registerForm.get(campRegister)?.hasError(validatedCamp)){
      return true;
    }else{
      return false;
    }
  }


}
