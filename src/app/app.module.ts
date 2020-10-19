import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { FormComponent } from './form/form.component';
// import { TableComponent } from './table/table.component';
// import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';
import { MyService } from './data.service';
import { IndividualexpenseComponent } from './individualexpense/individualexpense.component';




const routes : Routes = [
  // {path : 'table' , component : TableComponent },
  { path: 'table', loadChildren: () => import('./table/table.module').then(m => m.tableModule) } ,

  { path: 'form', loadChildren: () => import('./form/form.module').then(m => m.formModule) } ,
  // {path : 'form' , component : FormComponent },
  {path : 'form/:id' , component : IndividualexpenseComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    // FormComponent,
    // TableComponent,
    IndividualexpenseComponent
  ],
  imports: [ReactiveFormsModule,
    BrowserModule, RouterModule.forRoot(routes)
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
