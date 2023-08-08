
    
// login.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userid: string = '';
  password: string = '';

  login() {
    console.log('User ID:', this.userid);
    console.log('Password:', this.password);
  }
}


  

