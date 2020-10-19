import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form.component';


const routes: Routes = [
  { path: '', component: FormComponent }
];

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class formModule { }
