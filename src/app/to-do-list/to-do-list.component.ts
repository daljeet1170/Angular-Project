// import { Component } from '@angular/core';
// @Component({
//   selector: 'app-to-do-list',
//   templateUrl: './to-do-list.component.html',
//   styleUrls: ['./to-do-list.component.css']
// })
// export class ToDoListComponent {
//   list:any[]=[];
//   addTask(item:string){
//   this.list.push({id:this.list.length,name:item});
//   console.warn(this.list);
//       }
//     removeTask(id:number){
//       console.warn(id)
//       this.list=this.list.filter(item=>item.id!==id);
//     }
//     }

import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Model/task';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  taskObj : Task = new Task();
  taskArr : Task[] = [];

  addTaskValue : string = '';
  editTaskValue : string = '';

  constructor(private crudService : CrudService) { }

  ngOnInit(): void {
    this.editTaskValue = '';
    this.addTaskValue = '';
    this.taskObj = new Task();
    this.taskArr = [];
    this.getAllTask();
  }
  getAllTask() {
    this.crudService.getAllTask().subscribe(res => {
      this.taskArr = res;
    }, err => {
      alert("Unable to get list of tasks");
    });
  }

  addTask() {
    this.taskObj.task_name = this.addTaskValue;
    this.crudService.addTask(this.taskObj).subscribe(res => {
      this.ngOnInit();
      this.addTaskValue = '';
    }, err => {
      alert(err);
    })
  }

  editTask() {
    this.taskObj.task_name = this.editTaskValue;
    this.crudService.editTask(this.taskObj).subscribe(res => {
      this.ngOnInit();
    }, err=> {
      alert("Failed to update task");
    })
  }

  deleteTask(etask : Task) {
    this.crudService.deleteTask(etask).subscribe(res => {
      this.ngOnInit();
    }, err=> {
      alert("Failed to delete task");
    });
  }

  call(etask : Task) {
    this.taskObj = etask;
    this.editTaskValue = etask.task_name;
  }


}