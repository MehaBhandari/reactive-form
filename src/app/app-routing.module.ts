import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AppComponent} from './app.component';
import {ReactiveFormComponent} from './reactive-form/reactive-form.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {CrudOperations} from './crud-operations/crud-operations.component';

const routes: Routes = [
  {path: 'reactiveFormComponent', component: ReactiveFormComponent, pathMatch: 'full'},
  {path: 'loginFormComponent', component: LoginFormComponent, pathMatch: 'full'},
  {path: 'crudOperations', component: CrudOperations, pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
