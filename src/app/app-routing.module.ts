import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReactiveFormComponent} from './reactive-form/reactive-form.component';


const routes: Routes = [
  {path: 'reactiveFormComponent', component: ReactiveFormComponent, pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
