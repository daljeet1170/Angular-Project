import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'todolist' , component:ToDoListComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' } 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
