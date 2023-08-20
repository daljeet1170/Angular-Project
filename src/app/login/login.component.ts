import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { user } from '../Model/user.model';
import { DataService } from '../data.service';
import { Route, Router } from '@angular/router';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  

  constructor(private dataservice : DataService , private route : Router){}



  hide = true;
  emailid : any;
  userpassword : any ;
  email = new FormControl('', [Validators.required, Validators.email]);
  user !: any;
  incorrect : boolean =false  ;

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  
  login()
  {
    console.log("btn clicked");
    this.user = this.dataservice.getUserByemailid(this.emailid);
    if(this.user === undefined)
    {
      this.incorrect = true;

    }
    else
    {
    if(this.user.password === this.userpassword)
    {
      console.log("login Successfuly");
      this.route.navigate(['dashboard']);
    }
    else
    {
        console.log("Incorrect Password");
        this.incorrect = true;
    }
  }
}


}
