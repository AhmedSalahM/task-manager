import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  imports: [FormsModule],
  templateUrl: './signin.html',
  styleUrl: './signin.css',
})
export class Signin {

user = {
    email: '',
    password: ''
  };

  router=inject(Router)
  onLogin(form: any) {
    if (form.valid) {
      console.log(this.user);
      localStorage.setItem("email", this.user.email);
this.router.navigate(['/'])
    }
  }

}
