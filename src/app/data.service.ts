import { Injectable } from '@angular/core';
import { user } from './Model/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
 
  private users :user[] = [
    { emailid: 'daljeetkaur@gmail.com', password : '789' }
  ]

  dashboardData : string[] =  [
    "Hi Welcome to my Dashbord.",  "You have Successfully Log In " ,   "This is my To-DO LIst. "
  ]

  getUserByemailid(emailid: any): user | undefined {
    return this.users.find(x => x.emailid == emailid);
  }
  
  getDashboard() : string[] | undefined
  {
    return this.dashboardData;
  }



}
