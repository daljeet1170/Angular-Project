import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private dataservice : DataService)
  {}
  
  dashboardData : any= [];

  ngOnInit(): void {
    
  this.dashboardData = this.dataservice.getDashboard();
  }




}
