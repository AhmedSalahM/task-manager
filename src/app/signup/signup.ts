import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
   signupForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required])
  });

 get f(){
  return this.signupForm.controls;
 }

  onSignup() {
    if (this.signupForm.invalid) return;

    const data = this.signupForm.value;

    if (data.password !== data.confirmPassword) {
      console.log("Passwords do not match");
      return;
    }

    console.log("Signup Data:", this.signupForm);
    // API call here
  }
}
