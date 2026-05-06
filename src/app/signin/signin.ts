import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Authservice } from '../services/authservice';
import { NotificationService } from '../services/notification-service';

@Component({
  selector: 'app-signin',
  imports: [FormsModule],
  templateUrl: './signin.html',
  styleUrl: './signin.css',
})
export class Signin {
  authService = inject(Authservice);
  notification = inject(NotificationService);
  router = inject(Router);
user = {
    email: '',
    password: ''
  };

  // router=inject(Router)
  onLogin(form: any) {
     if (form.invalid) return;
    this.authService.getUserByEmail(this.user.email)
      .subscribe(res => {
        if (res.length === 0) {
              //alert("Invalid email");
              this.notification.show('Invalid email or password', 'error');
              return;
            }
       const user = res[0];

  if (user.password !== this.user.password) {

    //alert("Invalid password");
    this.notification.show('Invalid email or password', 'error');
    return;
  }

  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", "fake-token");
this.notification.show('Login successfully', 'success');
  this.router.navigate(['/']);
});
//     if (form.valid) {
//       console.log(this.user);
//       localStorage.setItem("email", this.user.email);
// this.router.navigate(['/'])
//     }
  }

  goToSignup(){
    
    this.router.navigate(['/signup'])
  }

}
