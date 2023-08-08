// dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  items: string[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.items = this.dataService.items;
  }
}